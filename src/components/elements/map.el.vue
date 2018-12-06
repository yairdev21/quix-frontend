<template>
  <div>
    <div v-if="isGettingLocation" contenteditable="false">
      <h2>Add Your Location</h2>
      <label>
        <gmap-autocomplete @place_changed="setPlace"></gmap-autocomplete>
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
    }
  },
  props: ["idx", "col"],
  data() {
    return {
      isGettingLocation: true,
      id: ID(),
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null
    };
  },
  methods: {
    setPlace(place) {
      this.savePlace(place);
      this.currentPlace = place;
      this.isGettingLocation = false;
      this.addMarker();
    },
    addMarker() {
      if (this.currentPlace) {
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
    },
    savePlace(place) {
      // let site = this.$store.getters.getSite;
      // console.log('idx is ' , this.idx._id);
      // let section = site.elements.filter(section=> console.log(section)
      // )
      // let El = site.sections[2].elements.filter(element => {
      //   return element._id === this.col._id;
      // });
      // El[0].data.place = place;
    }
  },
  mounted() {
    this.geolocate();
  }
};
</script>