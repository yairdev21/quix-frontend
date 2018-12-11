<template>
  <div>
    <div v-if="isGettingLocation" contenteditable="false">
      <h2>Add Your Location</h2>
      <label>
        <gmap-autocomplete @place_changed="savePlace"></gmap-autocomplete>
        <button @click="addMarker">Add</button>
      </label>
      <br>
    </div>
    <gmap-map v-else :center="center" :zoom="12" style="width:100%;  height: 400px;">
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
import { ID } from "../../services/utils.js";
import { EventBus } from "@/event-bus.js";

export default {
  name: "GoogleMap",
  props: {
    data: {
      type: Object,
      required: true,
      getMap: false
    },
    sectionIdx: {
      type: Number
    },
    col: {
      type: Object
    }
  },
  data() {
    return {
      isGettingLocation: true,
      id: ID(),
      center: {},
      markers: [],
      places: [],
      currentPlace: null
    };
  },
  methods: {
    savePlace(place) {
      EventBus.$emit("updateLocation", place, this.sectionIdx);
      this.setPlace(place);
    },
    setPlace(place) {
      console.log('place that is going', place);
      this.currentPlace = place;
      this.isGettingLocation = false;
      this.addMarker();
    },
    addMarker() {
      if (this.currentPlace) {
        console.log(this.currentPlace);
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  },
  mounted() {
    const site = this.$store.getters.getSite;
    let place = this.col.data.place
    // console.log("THIS IS THE PLACE: ", this.col.data.place.geometry.location.lat());
    if (this.col.data.place) {
      this.setPlace(place);
    }
    this.geolocate();
  }
};
</script>