import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core'
import { AppService } from 'src/app/app.service'
import { ActivatedRoute } from '@angular/router'
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms'
import { MapsAPILoader } from '@agm/core'
import { Property } from 'src/app/app.models'
import { MatSnackBar } from '@angular/material/snack-bar'
import { MatStepper } from '@angular/material/stepper'
import { MatTableDataSource } from '@angular/material/table'
import { AccommodationCreate } from 'src/app/models/Accommodation/accommodation-create'
import { Adress } from 'src/app/models/adress'
import { AccommodationsService } from 'src/app/services/accommodations.service'
import { DevicesService } from 'src/app/services/devices.service'
import { UploadService } from 'src/app/services/upload.service'

@Component({
  selector: 'app-edit-property',
  templateUrl: './edit-property.component.html',
  styleUrls: ['./edit-property.component.scss'],
})
export class EditPropertyComponent implements OnInit {
  @ViewChild('horizontalStepper') horizontalStepper: MatStepper
  @ViewChild('addressAutocomplete') addressAutocomplete: ElementRef
  dataSource: MatTableDataSource<any>
  public submitForm: FormGroup
  public features = []
  public donne = []
  public propertyTypes = []
  public propertyStatuses = []
  public cities = []
  public options = this.features
  public neighborhoods = []
  public streets = []
  public feature = []
  public data = []
  public lat: number = 40.678178
  public lng: number = -73.944158
  public zoom: number = 12
  public id: number = 0
  public sub
  fileData: File = null
  previewUrl: any = null
  files: File[] = []
  public acomodationcreate: AccommodationCreate = new AccommodationCreate()
  public adress: Adress = new Adress()
  constructor(
    public appService: AppService,
    private fb: FormBuilder,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private globalservice: UploadService,
    public accomodationservice: AccommodationsService,
    private activatedRoute: ActivatedRoute,
    public devicesservice: DevicesService,
  ) {}

  onChange(event) {
    // this.feature = <any>this.submitForm.get('additional.features').value as any;

    if (event.checked) {
      this.feature.push({ deviceId: event.source.value })
    } else {
      const i = this.feature.findIndex((x) => x.value === event.source.value)
      this.feature.splice(i)
    }
  }
  submitstep1() {
    console.log(this.submitForm.get('basic.propertyType').value)

    this.acomodationcreate.kind = this.submitForm.get(
      'basic.propertyType',
    ).value
    this.acomodationcreate.size = this.submitForm.get(
      'basic.propertyStatus',
    ).value
    this.acomodationcreate.step = 2
    this.sub = this.activatedRoute.params.subscribe((params) => {
      this.id = params['id']
    })

    this.submitstep6()
  }
  submitstep2() {
    console.log(this.submitForm.get('address.city').value)
    this.adress.city = this.submitForm.get('address.city').value
    this.adress.postalCode = this.submitForm.get('address.zipCode').value
    this.adress.street = this.submitForm.get('address.street').value
    this.adress.addressComplement = this.submitForm.get(
      'address.neighborhood',
    ).value
    this.adress.step = 3
    this.accomodationservice
      .putAcommodation(this.id, { address: this.adress, step: 3 })
      .subscribe((res) => {})
  }
  submitstep3() {
    this.accomodationservice
      .putAcommodation(this.id, {
        bathrooms: Number(this.submitForm.get('additional.bathrooms').value),
        bedrooms: Number(this.submitForm.get('additional.bathrooms').value),
        beds: Number(this.submitForm.get('additional.area').value),
        travelers: Number(this.submitForm.get('additional.garages').value),
        step: 4,
      })
      .subscribe((res) => {})
    this.submitstep4()
  }
  submitstep4() {
    var json = Object.assign({}, this.feature)

    this.accomodationservice
      .putAcommodation(this.id, { equipments: this.feature, step: 5 })
      .subscribe((res) => {})
    this.globalservice.clear()
  }
  submitstep5() {
    this.accomodationservice
      .putAcommodation(this.id, {
        photos: this.globalservice.getMyGV(),
        step: 6,
      })
      .subscribe((res) => {
        this.submitstep8()
      })
    this.globalservice.clear()
  }
  public upload(event: any): void {
    this.fileData = event.addedFiles[0]
    this.files.push(...event.addedFiles)
    console.log('Event: ', event.addedFiles)
    console.log('FileName: ', this.fileData.name)
    this.preview()
  }
  submitstep6() {
    this.accomodationservice
      .putAcommodation(this.id, {
        title: this.submitForm.get('basic.title').value,
        description: this.submitForm.get('basic.desc').value,
        step: 7,
      })
      .subscribe((res) => {
        this.submitstep7()
      })
  }
  submitstep7() {
    this.accomodationservice
      .putAcommodation(this.id, {
        price: this.submitForm.get('basic.priceEuro').value,
        step: 8,
      })
      .subscribe((res) => {})
  }
  submitstep8() {
    this.accomodationservice
      .putAcommodation(this.id, { stauts: 1, step: 9 })
      .subscribe((res) => {})
  }

  preview() {
    const mimeType = this.fileData.type
    if (mimeType.match(/image\/*/) == null) {
      return
    }
    const reader = new FileReader()
    reader.readAsDataURL(this.fileData)
    reader.onload = (event) => {
      this.previewUrl = reader.result
      console.log('Result: ', reader.result)
      console.log('Reader: ', this.previewUrl)
    }
  }

  onRemove(event) {
    console.log(event)
    this.files.splice(this.files.indexOf(event), 1)
    this.previewUrl = null
  }
  public formArray: FormArray
  onCheckChange(event) {
    this.formArray = this.submitForm.get('additional.features') as FormArray
    /* Selected */
    if (event.target.checked) {
      // Add a new control in the arrayForm
      this.formArray.push(new FormControl(event.target.i.value))
    } else {
    /* unselected */
      // find the unselected element
      let i: number = 0

      this.formArray.controls.forEach((ctrl: FormControl) => {
        if (ctrl.value == event.target.value) {
          // Remove the unselected element from the arrayForm
          this.formArray.removeAt(i)
          return
        }

        i++
      })
    }
  }

  public async loaddata() {
    const data = await this.devicesservice.getDevices().toPromise()
    this.features = data
  }
  public async setfeatures(id, name) {
    this.features.push({ id: id, name: name })
  }

  public async load() {
    const data = await this.accomodationservice.getAccommodation(this.id).toPromise()
    this.donne = data
    console.log('donne', this.donne)
  }
  public async ngOnInit() {
    // this.features = JSON.a;
    this.sub = this.activatedRoute.params.subscribe(params => {   
      this.id = params['id'];
    });
    await this.loaddata()
    await this.load()
    console.log('donne', this.donne)
    console.log('hna:', this.features)
 
    this.propertyTypes = this.appService.getPropertyTypes()
    this.propertyStatuses = this.appService.getPropertyStatuses()
    this.cities = this.appService.getCities()
    this.neighborhoods = this.appService.getNeighborhoods()
    this.streets = this.appService.getStreets()
    
    this.submitForm = this.fb.group({
      basic: this.fb.group({
        propertyType: [null, Validators.required],
        propertyStatus: null,
        title: [null, Validators.required],
        desc: null,
        priceEuro: null,
        //    gallery: null
      }),
      address: this.fb.group({
        location: ['', Validators.required],
        city: [this.donne['address'].city, Validators.required],
        zipCode: this.donne['address'].postalCode,
        neighborhood: '',
        street: this.donne['address'].street,
      }),
      additional: this.fb.group({
        bedrooms: this.donne['bedrooms'],
        bathrooms: this.donne['bathrooms'],
        garages: this.donne['travelers'] ,
        area: this.donne['beds'],
        yearBuilt: '',
        features: this.buildFeatures(),
      }),
      media: this.fb.group({
        videos: this.fb.array([this.createVideo()]),
        plans: this.fb.array([this.createPlan()]),
        additionalFeatures: this.fb.array([this.createFeature()]),
        featured: false,
      }),
    })

    this.setCurrentPosition()
    this.placesAutocomplete()
  }

  public onSelectionChange(e: any) {
    if (e.selectedIndex == 4) {
      this.horizontalStepper._steps.forEach((step) => (step.editable = false))
      console.log(this.submitForm.value)
    }
  }
  public reset() {
    this.horizontalStepper.reset()

    const videos = <FormArray>this.submitForm.controls.media.get('videos')
    while (videos.length > 1) {
      videos.removeAt(0)
    }
    const plans = <FormArray>this.submitForm.controls.media.get('plans')
    while (plans.length > 1) {
      plans.removeAt(0)
    }
    const additionalFeatures = <FormArray>(
      this.submitForm.controls.media.get('additionalFeatures')
    )
    while (additionalFeatures.length > 1) {
      additionalFeatures.removeAt(0)
    }

    this.submitForm.reset({
      additional: {
        features: this.features,
      },
      media: {
        featured: false,
      },
    })
  }

  // -------------------- Address ---------------------------
  public onSelectCity() {
    this.submitForm.controls.address
      .get('neighborhood')
      .setValue(null, { emitEvent: false })
    this.submitForm.controls.address
      .get('street')
      .setValue(null, { emitEvent: false })
  }
  public onSelectNeighborhood() {
    this.submitForm.controls.address
      .get('street')
      .setValue(null, { emitEvent: false })
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude
        this.lng = position.coords.longitude
      })
    }
  }
  private placesAutocomplete() {
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(
        this.addressAutocomplete.nativeElement,
        {
          types: ['address'],
        },
      )
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace()
          if (place.geometry === undefined || place.geometry === null) {
            return
          }
          this.lat = place.geometry.location.lat()
          this.lng = place.geometry.location.lng()
          this.getAddress()
        })
      })
    })
  }

  // public getAddress(){
  //   this.mapsAPILoader.load().then(() => {
  //     let geocoder = new google.maps.Geocoder();
  //     let latlng = new google.maps.LatLng(this.lat, this.lng);
  //     geocoder.geocode({'location': latlng}, (results, status) => {
  //       if(status === google.maps.GeocoderStatus.OK) {
  //         console.log(results);
  //         //this.addresstext.nativeElement.focus();
  //         let address = results[0].formatted_address;
  //         this.submitForm.controls.location.setValue(address);
  //         this.setAddresses(results[0]);
  //       }
  //     });
  //   });
  // }
  public getAddress() {
    this.appService.getAddress(this.lat, this.lng).subscribe((response) => {
      console.log(response)
      if (response['results'].length) {
        let address = response['results'][0].formatted_address
        this.submitForm.controls.address.get('location').setValue(address)
        this.setAddresses(response['results'][0])
      }
    })
  }
  public onMapClick(e: any) {
    this.lat = e.coords.lat
    this.lng = e.coords.lng
    this.getAddress()
  }
  public onMarkerClick(e: any) {
    console.log(e)
  }

  public setAddresses(result) {
    this.submitForm.controls.address.get('city').setValue(null)
    this.submitForm.controls.address.get('zipCode').setValue(null)
    this.submitForm.controls.address.get('street').setValue(null)

    var newCity, newStreet, newNeighborhood

    result.address_components.forEach((item) => {
      if (item.types.indexOf('locality') > -1) {
        if (this.cities.filter((city) => city.name == item.long_name)[0]) {
          newCity = this.cities.filter((city) => city.name == item.long_name)[0]
        } else {
          newCity = { id: this.cities.length + 1, name: item.long_name }
          this.cities.push(newCity)
        }
        this.submitForm.controls.address.get('city').setValue(newCity)
      }
      if (item.types.indexOf('postal_code') > -1) {
        this.submitForm.controls.address.get('zipCode').setValue(item.long_name)
      }
    })

    if (!newCity) {
      result.address_components.forEach((item) => {
        if (item.types.indexOf('administrative_area_level_1') > -1) {
          if (this.cities.filter((city) => city.name == item.long_name)[0]) {
            newCity = this.cities.filter(
              (city) => city.name == item.long_name,
            )[0]
          } else {
            newCity = {
              id: this.cities.length + 1,
              name: item.long_name,
            }
            this.cities.push(newCity)
          }
          this.submitForm.controls.address.get('city').setValue(newCity)
        }
      })
    }

    if (newCity) {
      result.address_components.forEach((item) => {
        if (item.types.indexOf('neighborhood') > -1) {
          let neighborhood = this.neighborhoods.filter(
            (n) => n.name == item.long_name && n.cityId == newCity.id,
          )[0]
          if (neighborhood) {
            newNeighborhood = neighborhood
          } else {
            newNeighborhood = {
              id: this.neighborhoods.length + 1,
              name: item.long_name,
              cityId: newCity.id,
            }
            this.neighborhoods.push(newNeighborhood)
          }
          this.neighborhoods = [...this.neighborhoods]
          this.submitForm.controls.address
            .get('neighborhood')
            .setValue([newNeighborhood])
        }
      })
    }

    if (newCity) {
      result.address_components.forEach((item) => {
        if (item.types.indexOf('route') > -1) {
          if (
            this.streets.filter(
              (street) =>
                street.name == item.long_name && street.cityId == newCity.id,
            )[0]
          ) {
            newStreet = this.streets.filter(
              (street) =>
                street.name == item.long_name && street.cityId == newCity.id,
            )[0]
          } else {
            newStreet = {
              id: this.streets.length + 1,
              name: item.long_name,
              cityId: newCity.id,
              neighborhoodId: newNeighborhood ? newNeighborhood.id : null,
            }
            this.streets.push(newStreet)
          }
          this.streets = [...this.streets]
          this.submitForm.controls.address.get('street').setValue([newStreet])
        }
      })
    }
  }

  // -------------------- Additional ---------------------------
  public buildFeatures() {
    const arr = this.features.map((feature) => {
      return this.fb.group({
        id: feature.id,
        name: feature.name,
      })
    })
    return this.fb.array(arr)
  }

  // -------------------- Media ---------------------------
  public createVideo(): FormGroup {
    return this.fb.group({
      id: null,
      name: null,
      link: null,
    })
  }
  public addVideo(): void {
    const videos = this.submitForm.controls.media.get('videos') as FormArray
    videos.push(this.createVideo())
  }
  public deleteVideo(index) {
    const videos = this.submitForm.controls.media.get('videos') as FormArray
    videos.removeAt(index)
  }

  public createPlan(): FormGroup {
    return this.fb.group({
      id: null,
      name: null,
      desc: null,
      area: null,
      rooms: null,
      baths: null,
      image: null,
    })
  }
  public addPlan(): void {
    const plans = this.submitForm.controls.media.get('plans') as FormArray
    plans.push(this.createPlan())
  }
  public deletePlan(index) {
    const plans = this.submitForm.controls.media.get('plans') as FormArray
    plans.removeAt(index)
  }

  public createFeature(): FormGroup {
    return this.fb.group({
      id: null,
      name: null,
      value: null,
    })
  }
  public addFeature(): void {
    const features = this.submitForm.controls.media.get(
      'additionalFeatures',
    ) as FormArray
    features.push(this.createFeature())
  }
  public deleteFeature(index) {
    const features = this.submitForm.controls.media.get(
      'additionalFeatures',
    ) as FormArray
    features.removeAt(index)
  }
}
