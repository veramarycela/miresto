<template>
<v-container>
<v-row
        align="end"
         no-gutters
        style="height: 150px;">
      <h1 class="text-right">CONSULT BUYER</h1>
   </v-row> 
   <v-form @submit.prevent="buscarb">      
     <v-text-field label="Id:" v-model="idf" ></v-text-field>       
   </v-form>
   
<v-row >

   <v-card v-if="item1 = uno.filter( comprador => comprador.buyeid.id === idf )" >
    <v-card-text v-for="(item, index ) in item1" :key="index"  >    
      <v-chip label color="pink" text-color="white" class="ml">                                        
      <v-icon left></v-icon>
                       SHOPPING
      </v-chip>             
               
        <p><a>ID BUYER:</a>{{item.buyeid.id}}-<b>NAME:</b>{{item.buyeid.name}}-<b>AGE: </b>{{item.buyeid.age}}</p>     
        <p><a>ID TRANSACTIONS:</a>{{item.id}}</p>
        <p><a>IP:</a>{{item.ip}}</p>
        <p><a>DEVICE:</a>{{item.device}}</p> 
        <p><a>DATE:</a>{{item.datec}}</p>
      <ul v-for="(item2, index2 ) in item.productsids" :key="index2">
        <li><p><a>PRODUCTS:</a>{{item2.id}}</p></li>
        <li><p><b>NAME:</b>{{item2.name}}</p></li>
        <li><p><b>PRICE:</b>{{item2.price}}</p> </li> 
        <li><p><b>DATE:</b>{{item2.datec}}</p> </li>
      </ul>  
    </v-card-text>
    </v-card>
 </v-row>  
</v-container>
</template>
<script  src = "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script>
import axios from "axios";

export default ({  
  data() {     
      return {
        idf: '',     
        uno : null,         
      }
        },         
     mounted(){       
       axios
          .get('http://localhost:9000/listart')
          .then(response => (this.uno = response.data.data.queryTransactions))
          .catch(e => {console.log(uno)})   
     } 
})
</script>