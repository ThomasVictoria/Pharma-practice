<template>
  <ais-instant-search
  :search-client="searchClient"
    index-name="prod_pharmacies"

  >

  <div class="form-group has-search">
      <span class="fa fa-search form-control-feedback"></span>
      <ais-search-box autofocus>
  <input
    slot-scope="{ currentRefinement, refine }"
    :value="currentRefinement"
    @input="refine($event.currentTarget.value)"
    placeholder="Search a Pharmacy by name or by zipcode"
    class="form-control"
  />


</ais-search-box>
    </div>
  <ais-hits>

  <table slot-scope="{ items }" class="table table-hover">

   <tr>
       <th>Nom</th>
       <th>Zip code</th>
       <th>Edit</th>
       <th>Delete</th>
   </tr>
   <tr v-for="item in items" :key="item.objectID">
       <td><ais-highlight attribute="fields.rs" :hit="item" /></td>
       <td><ais-highlight attribute="fields.cp" :hit="item" /></td>
       <td><router-link :to="{name: 'edit', params: { id: item.recordid }}" class="btn btn-primary">Edit</router-link></td>
       <td><button class="btn btn-danger">Delete</button></td>

   </tr>
</table>



   </ais-hits>
   <ais-pagination id="pagination">
  <ul
    slot-scope="{
      currentRefinement,
      nbPages,
      pages,
      isFirstPage,
      isLastPage,
      refine,
      createURL
    }"
  >
    <li v-if="!isFirstPage">
      <a :href="createURL(0)" @click.prevent="refine(0)">
        ‹‹
      </a>
    </li>
    <li v-if="!isFirstPage">
      <a
        :href="createURL(currentRefinement - 1)"
        @click.prevent="refine(currentRefinement - 1)"
      >
        ‹
      </a>
    </li>
    <li v-for="page in pages" :key="page">
      <a
        :href="createURL(page)"
        :style="{ fontWeight: page === currentRefinement ? 'bold' : '' }"
        @click.prevent="refine(page)"
      >
        {{ page + 1 }}
      </a>
    </li>
    <li v-if="!isLastPage">
      <a
        :href="createURL(currentRefinement + 1)"
        @click.prevent="refine(currentRefinement + 1)"
      >
        ›
      </a>
    </li>
    <li v-if="!isLastPage">
      <a :href="createURL(nbPages)" @click.prevent="refine(nbPages)">
        ››
      </a>
    </li>
  </ul>
</ais-pagination>


  </ais-instant-search>
</template>




<script>
import algoliasearch from 'algoliasearch/lite';


export default {
  data() {
    return {
      searchClient: algoliasearch(
        'VNPWS2VUR4',
        'fae5d271ca33fe30526a0922ccf48b9e'
      ),
    };
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

<style>
.main {
  width: 50%;
  margin: 50px auto;
}

/* Bootstrap 4 text input with search icon */

.has-search .form-control {
  padding-left: 2.375rem;
}

.has-search .form-control-feedback {
  position: absolute;
  z-index: 2;
  display: block;
  width: 2.375rem;
  height: 2.375rem;
  line-height: 2.375rem;
  text-align: center;
  pointer-events: none;
  color: #aaa;
}

ul.ais-pagination {
  padding: 0;
  margin: 0;
}

#pagination {
  margin: 10px 0;
  text-align: center;
}


ul {
  list-style-type: none;
  display: inline-flex;
}
#pagination > ul > li > a{
  margin: 6px;
}


</style>
