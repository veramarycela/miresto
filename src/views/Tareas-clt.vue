<template>
  <div>
    <v-container
     
      class="grey lighten-5 mb-6"
      
    >
   <v-row
        align="end"
         no-gutters
        style="height: 150px;">
      <h1 class="text-right">LIST TRANSACTIONS</h1>
   </v-row>
      <v-row
        align="end"
        no-gutters
        style="height: 150px;"     
      >    
        <v-col       
          v-for="(item, index ) in transactions" :key="index"
        >          
              <v-card class="mb-3" v-for="(item2, index2 ) in item" :key="index2">
                   <v-card-text>   
                       <v-chip label color="pink" text-color="white" class="ml">                                        
                       <v-icon left></v-icon>
                       TRANSACTIONS
                        </v-chip>     
                       <p><a>ID:</a>{{item2.id}}</p> 
                       <p><a>BUYERS:</a>{{item2.buyeid.id}}</p> 
                       <p><a>IP:</a>{{item2.ip}}</p> 
                       <p><a>DEVICE:</a>{{item2.device}}</p>                   
                         <ul>
                           <li v-for="(item3, index3 ) in item2.productsids" :key="index3">
                              <p><a>PRODUCTS:</a>{{item3.id}}</p> 
                           </li>
                           </ul>          
                        
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
      transactions:null,
      productos:null
        }
    },   
   mounted () {
    axios
      .get('http://localhost:9000/listart')
      .then(response => (this.transactions = response.data.data))      
      .catch(e => {console.log(transactions)})  
    },
    
})
</script>
