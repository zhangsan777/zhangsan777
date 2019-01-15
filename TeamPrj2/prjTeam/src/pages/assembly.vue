<template>
  <div class="assem">
    <az-assembly-left @events1="evnets11"></az-assembly-left>
    <az-assembly-right :tabView1="tabView"></az-assembly-right>
  </div>
</template>

<script>
  import pulices from "../assets/css/public.css";
  import AzAssemblyLeft from "../components/assembly/AzAssemblyLeft";
  import AzAssemblyRight from "../components/assembly/AzAssemblyRight";
  export default {
    name: "assembly",
    data(){
      return {
        tabView: "AzRightAzone1"
      }
    },
    methods: {

      evnets11(index){
        this.tabView = `AzRightAzone${index}`;
      }
    },
    components: {AzAssemblyRight, AzAssemblyLeft,pulices}
  }
</script>

<style scoped>
  .assem{
    padding-left:230px;
    min-height:100%;
    background: rgba(231,223,183,0.8);
    background: -webkit-linear-gradient(to bottom, rgba(231,223,183,0.8), rgba(92,162,92,0.8));
    background: linear-gradient(to bottom, rgba(231,223,183,0.8), rgba(92,162,92,0.8));
  }
</style>
