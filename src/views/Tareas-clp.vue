<template>
  <div>
    <v-container
     
      class="grey lighten-5 mb-6"
      
    >
   <v-row
        align="end"
         no-gutters
        style="height: 150px;">
      <h1 class="text-right">LIST PRODUCTS</h1>
   </v-row>
      <v-row
        align="end"
        no-gutters
        style="height: 150px;"     
      >    
        <v-col       
          v-for="(item, index ) in products" :key="index"
        >          
              <v-card class="mb-3" v-for="(item2, index2 ) in item" :key="index2">
                   <v-card-text>   
                       <v-chip label color="pink" text-color="white" class="ml">                                        
                       <v-icon left></v-icon>
                       PRODUCT
                        </v-chip>                                             
                       <p><a>ID:</a>{{item2.id}}</p> 
                       <p><a>NAME:</a>{{item2.name}}</p> 
                       <p><a>PRICE:</a>{{item2.price}}</p>                   
                   </v-card-text>                       
               </v-card>              
        </v-col>
      </v-row>
    </v-container>

    
  </div>
</template>
<script  src = "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script>
import axios from "axios";


export default ({  
  data() {
        return {
            alignments: [
        'center',
        
      ],
      products:null
        }
    },   
   mounted () {
    axios
      .get('http://localhost:9000/listarp')
      .then(response => (this.products = response.data.data))
      .catch(e => {console.log(products)})  
    },
    
})
</script>
