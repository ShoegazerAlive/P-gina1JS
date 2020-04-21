$(document).ready(function(){

	//Selector de tema

var themes = $("#theme")

$("to-green").click(function(){
	theme.attr("href", "css/style1.css")
});

$("to-red").click(function(){
	theme.attr("href", "css/style2.css")
});

$("to-blue").click(function(){
	theme.attr("href", "css/style3.css")
});


//Slider

 $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 1000,
    pager:true,
  	});

 // //Posts
	//  var posts = [

 // 		{
 // 		 title: "Artículo 1",
 // 		 date: "Publicado el " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
 // 		 content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales imperdiet rutrum. Aenean dapibus porttitor blandit. Duis venenatis finibus lacus nec efficitur. Phasellus quis facilisis neque, pharetra posuere lacus. Quisque metus est, feugiat eget pharetra eu, tempor et leo. Suspendisse efficitur orci id orci aliquet, vel ornare dui suscipit. Mauris enim nisi, posuere in efficitur at, imperdiet ac sapien.'
 // 		},
 // 		{
 // 		 title: "Artículo 2",
 // 		 date: "Publicado el " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
 // 		 content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales imperdiet rutrum. Aenean dapibus porttitor blandit. Duis venenatis finibus lacus nec efficitur. Phasellus quis facilisis neque, pharetra posuere lacus. Quisque metus est, feugiat eget pharetra eu, tempor et leo. Suspendisse efficitur orci id orci aliquet, vel ornare dui suscipit. Mauris enim nisi, posuere in efficitur at, imperdiet ac sapien.'
 // 		},
 // 		{
 // 		 title: "Artículo 3",
 // 		 date: "Publicado el " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
 // 		 content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales imperdiet rutrum. Aenean dapibus porttitor blandit. Duis venenatis finibus lacus nec efficitur. Phasellus quis facilisis neque, pharetra posuere lacus. Quisque metus est, feugiat eget pharetra eu, tempor et leo. Suspendisse efficitur orci id orci aliquet, vel ornare dui suscipit. Mauris enim nisi, posuere in efficitur at, imperdiet ac sapien.'
 // 		},
		 
	// ];



	// posts.forEach((item, index) => {
	// 	var post = `
	// 	<article class= "post">
	// 		<h2>${item.title}</h2>
	// 		<span class="date">${item.date}</span>
	// 		<p>
	// 			${item.content}
	// 		</p>
	// 	<a href="#" class="button-more">Leer más...</a>
	// 	</article> 
	// 	`;

	// 	$(posts).append(post);

	// });


	

	/* 
	<article class= "post">
		<h2>Títutlo</h2>
		<span class="date">Publicación</span>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales imperdiet rutrum. Aenean dapibus porttitor blandit. Duis venenatis finibus lacus nec efficitur. Phasellus quis facilisis neque, pharetra posuere lacus. Quisque metus est, feugiat eget pharetra eu, tempor et leo. Suspendisse efficitur orci id orci aliquet, vel ornare dui suscipit. Mauris enim nisi, posuere in efficitur at, imperdiet ac sapien.
		</p>
		<a href="#" class="button-more">Leer más...</a>
	</article> 

	*/
		 
  });
