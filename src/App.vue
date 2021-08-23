<template>
  <v-app >
<v-app-bar
      :collapse="!collapseOnScroll"
      :collapse-on-scroll="collapseOnScroll"
      absolute
      color="deep-purple accent-4"
      dark
      scroll-target="#scrolling-techniques-6"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Restaurant</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-checkbox
        v-model="collapseOnScroll"
        color="white"
        hide-details
      ></v-checkbox>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-6"
      class="overflow-y-auto"
      max-height="600"
    >
   
    </v-sheet>   
    <v-navigation-drawer app v-model="drawer" temporary>
          <v-layout>
            <v-flex>
            <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                Opciones
              </v-list-item-title>
              <v-list-item-subtitle>
                Seleccione
              </v-list-item-subtitle>
              </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list
            dense
            nav
          >
            <v-list-item
              v-for="item in items"
              :key="item.title"              
              link   
              :to= "item.name"                        
            >
              <v-list-item-icon  >
                <v-icon >{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>   
          
            </v-list-item>
            
          </v-list>
            </v-flex>
          </v-layout>
    </v-navigation-drawer>     
    <main>
        <v-container>
        <router-view/>
        </v-container>
    </main>


  </v-app>
</template>

<script>

export default {
  name: 'App',    
    data: () => ({
      drawer: false,
      group: null,
      items: [
          // { title: 'Load Buyers', icon: 'mdi-view-dashboard', name:'cargar-c'},
          // { title: 'Load Products', icon: 'mdi-view-dashboard', name:'cargar-p'},
          { title: 'Load Transactions', icon: 'mdi-view-dashboard', name:'cargar-t'},
          { title: 'List Buyers', icon: 'mdi-image', name:'tareas-clc' },
          { title: 'List Products', icon: 'mdi-image', name:'tareas-clp' },
          { title: 'List Transactions', icon: 'mdi-image', name:'tareas-clt' },
          { title: 'Consult Buyer', icon: 'mdi-help-box', name:'consul-o' },
          // { title: 'Home', icon: 'mdi-help-box', name:'Home' },
        ],                
      right: null,
      collapseOnScroll: true,
     }),
    watch: {
      group () {
        this.drawer = false
      }
    },  
  } 
  

</script>

