url_api = "https://pure-basin-20770.herokuapp.com/api/rooms";
switch_light_url=url_api+"/switch/light";
switch_ringer_url=url_api+"/switch/ringer";
var app = new Vue({
  el: '#app',
  data: {
        roomArray: [],
        selected: 0
    },
	mounted() {
			axios.get(url_api)
				 .then(response => {this.roomArray = response.data});
	},
	methods: {
        switchLight(room) {
            this.selected = room;
            axios.post(switch_light_url, {roomId: room.id})
                .then(response => {this.rooms = response.data});
            },
        switchRinger(room) {
            this.selectedRoom = room;
            axios.post(switch_ringer_url, {roomId: room.id})
                .then(response => {this.rooms = response.data});
        },

    }	
	
});