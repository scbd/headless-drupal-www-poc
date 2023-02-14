<template>
  <aside class="desktop-only left-article-menu-container">

        <nav class="sidebar-menu " role="navigation">

          <!-- <p style="display:inline-block;margin-right:5px;"> {{siteNavigationElement.name}}</p> -->
          <form  v-if="menuIdentifier && canEdit()" :action="`https://prod.drupal.www.infra.cbd.int/admin/structure/menu/manage/${menuIdentifier}`" method="get" target="_blank" style="position:absolute;right:20px;">
            <button ></button>
          </form>
          <ul class="list-unstyled">
            <li  v-for="(aMenu,index) in menus" :key="index"  class="level-0" :class="{ active: isActive(aMenu.url) }">
              <nuxt-link  :to="filterBase(aMenu.url)">{{aMenu.name }}</nuxt-link>

              <ul  class="sub-menu-items list-unstyled level-1 collapse show active " >
                <li  v-for="(aSubMenu,i) in aMenu.hasPart" :key="i" >
                  <nuxt-link  :to="filterBase(aSubMenu.url)">{{aSubMenu.name }}</nuxt-link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
    

  </aside>
</template>

<script setup>
const  menus = useState('menus') 

const menuIdentifier = getMenuId()

const isActive = (url) => {
  const { path } = useRoute()

  return path === filterBase(url)
}
</script>

<style scoped>
form {display:inline-block}
button{
  display:inline-block;
  width:26px;
  height:26px;
  border-radius:26px;
margin: 0;
  color:#fff;

border: 1px solid #ccc;
  text-decoration:none;

  background:#fff;
    background-image: url(https://www.cbd.int/core/misc/icons/bebebe/pencil.svg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 16px 16px;
    cursor: pointer;
  }
button:hover{
  background-image: url(https://www.cbd.int/core/misc/icons/787878/pencil.svg);
}
#WPSideBar{
  min-height: 100vh;
  -webkit-flex-basis: 24%;
	-ms-flex-preferred-size: 24%;
	flex-basis: 20%;
}
.left-article-menu-container {
	-webkit-flex-basis: 24%;
	-ms-flex-preferred-size: 24%;
	flex-basis: 20%;
  padding-top: 1em;
	background: #fff;
  position: relative;
  min-height: 100vh;
}

.sidebar-menu {
  color: black;
  margin-left: 30px;
  padding-right: 30px;
  font-weight: 400;
  font-family: Inter;
  width: 100%;
  position: absolute;
  z-index: 1;
}

/* .sidebar-menu .level-0 .router-link-active{
  color:#02B3FE;
  font-weight: bold;
} */

.sidebar-menu > ul > li.level-0.active {
  padding: 1em 1em 1em 0em;
  border-top: 2px #00EC5E solid;
}
.sidebar-menu > ul > li.level-0.active + li{
  padding: 1em 1em 1em 0em;
  border-top: 2px #00EC5E solid;
}
.sidebar-menu > ul >  li:first-child.level-0.active{
  border: none;
}
.sidebar-menu > ul > li:nth-child(+1){
  padding: 1em 1em 1em 0em;
  border-bottom: 2px #00EC5E solid;
}
.sidebar-menu > ul > li.level-0.active a.router-link-active{
  color:#02B3FE;
  font-weight: bold;
}

.sidebar-menu > ul > li {
  padding: 1em 1em 1em 0em;

  border-top: 1px #CECDCD solid;
}
.sidebar-menu > ul > li:first-child {
  border: none;
}

.sidebar-menu .level-0 > a {
  color: black;
  /* text-transform: uppercase; */
}
.sidebar-menu .level-1 > a {
  color: black;
}
.sidebar-menu .level-2 > a {
  color: black;
}


@media (max-width:991px) {
	.left-article-menu-container {
		display: block;
  }
}
</style>