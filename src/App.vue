<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
	@import 'normalize.css';

*{
	box-sizing: border-box;
}

@font-face {
	font-family: 'DIN';
	src: url('./assets/fonts/DINPro-CondensedBold.eot');
	src: url('./assets/fonts/DINPro-CondensedBold.eot?#iefix') format('embedded-opentype'),
		url('./assets/fonts/DINPro-CondensedBold.woff') format('woff'),
		url('./assets/fonts/DINPro-CondensedBold.ttf') format('truetype');
	font-weight: normal;
	font-style: normal;
}

body {
	font-family: 'DIN';
}

.container {
	max-width: 1440px;
	width: 100%;
	margin: 0 auto;
}

ul {
	margin: 0;
	list-style: none;
}

a {
	text-decoration: none;
}
</style>
