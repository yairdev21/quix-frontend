<template>
  <div>
    <div v-if="!showMap" contenteditable="false">
      <h2>Add Your Location</h2>
      <label>
        <gmap-autocomplete @place_changed="savePlace"></gmap-autocomplete>
        {{placeText}}
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
      id: ID(),
      center: {},
      markers: [],
      places: [],
      currentPlace: null,
      placeText: "",
      showMap: null
    };
  },
  methods: {
    savePlace(place) {
      this.setPlace(place);
      // console.log("place that is going", place);
    },
    setPlace(place) {
      this.currentPlace = place;
      this.center = this.col.data.marker;
      if (!this.showMap) this.addMarker();
      this.showMap = true;
    },
    addMarker() {
      const marker = {
        lat: this.currentPlace.geometry.location.lat(),
        lng: this.currentPlace.geometry.location.lng()
      };
      this.markers.push({ position: marker });
      this.places.push(this.currentPlace);
      this.currentPlace.marker = marker;
      // console.log("place to save", this.currentPlace);
      EventBus.$emit("updateLocation", this.currentPlace, this.sectionIdx);
      this.center = marker;
      this.currentPlace = null;
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
    let place = this.col.data;
    this.showMap = !!place.address_components;
    if (this.showMap) {
      this.savePlace(place);
      this.markers.push({ position: this.col.data.marker });
    }
  }
};
</script>