<template v-if="PharmaData">
  <div>
    <h1>Pharmacy information</h1>
    <form>
      <br>
      <br>
      <br>

      <div class="row">
        <div class="col-md-6">
          <div class="form-group">

            <label>Pharmacy Name:</label>
            <h4>{{PharmaData.fields.rs}}</h4>
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Pharmacy Zip code:</label>
              <h4>{{PharmaData.fields.cp}}</h4>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Pharmacy phone number:</label>
              <h4>+{{PharmaData.fields.telephone}}</h4>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Country:</label>
              <h4>{{PharmaData.fields.commune}}</h4>
            </div>
          </div>
        </div><br />
    </form>
    <router-link to="/search" class="nav-link">Back to Search Engine</router-link>
  </div>
</template>

<script>
    export default {

      data() {
        return {
          PharmaData: {}
        }
      },
      created() {
        let uri = `http://67.207.90.23:1200/edit/${this.$route.params.id}`;

        this.axios.get(uri).then((res) => {
            this.PharmaData = res.data;
            
        });
      },
      methods:{
        getposition:function(){
          if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayLocationInfo);

      }

       function displayLocationInfo(position) {
        const lng =  position.coords.longitude;
        const lat =  position.coords.latitude;


         }
        }
      }

    }
</script>
