<template>
<div class="Dogslist">

  <div class="row">
    <div class="column">
      <div class="card">Hello! My Name is: <br /> Charlie
        <img src="https://www.guidedogs.org/wp-content/uploads/2019/11/website-donate-mobile.jpg" alt="">
        <div class="overlay">
          <div class="text">Name: Charlie <br /> Age: 4 years <br /> Hobbies: Chewing on Socks
            <button type="button" name="button">
              <router-link to="/Login"><span style="color: black">Walk Me!</span></router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="card">Hello! My Name is: <br /> Max
        <img src="https://post.greatist.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg" alt="">
        <div class="overlay">
          <div class="text">Name: Max <br /> Age: 4 years <br /> Hobbies: Chewing on Socks
            <button type="button" name="button">
              <router-link to="/Login"><span style="color: black">Walk Me!</span></router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="card">Hello! My Name is: <br /> Jojo
        <img src="https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp" alt="">
        <div class="overlay">
          <div class="text">Name: Jojo <br /> Age: 4 years <br /> Hobbies: Chewing on Socks
            <button type="button" name="button">
              <router-link to="/Login"><span style="color: black">Walk Me!</span></router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="card">Hello! My Name is: <br /> Woof
        <img src="https://linkshare2.flippydemos.com/uploaded_images/dogs_497551602.jpg" alt="">
        <div class="overlay">
          <div class="text">Name: Woof <br /> Age: 4 years <br /> Hobbies: Chewing on Socks
            <button type="button" name="button">
              <router-link to="/Login"><span style="color: black">Walk Me!</span></router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="column">
      <div class="card">Hello! My Name is: <br /> Polly
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GCtZMzmnVwuqdgNzniwrRQhYuPHXziD8TQ&usqp=CAU" alt="">
        <div class="overlay">
          <div class="text">Name: Polly <br /> Age: 4 years <br /> Hobbies: Chewing on Socks
            <button type="button" name="button">
              <router-link to="/Login"><span style="color: black">Walk Me!</span></router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="card">Hello! My Name is: <br /> Mark
        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bernese-mountain-dog-royalty-free-image-1581013857.jpg?crop=0.87845xw:1xh;center,top&resize=480:*" alt="">
        <div class="overlay">
          <div class="text">Name: Mark <br /> Age: 4 years <br /> Hobbies: Chewing on Socks

            <button type="button" name="button">
              <router-link to="/Login"><span style="color: black">Walk Me!</span></router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="card">Hello! My Name is: <br /> Draco
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaX5WwBBEaef8sB0YDU4jTteeusyYo6yr44Q&usqp=CAU" alt="">
        <div class="overlay">
          <div class="text">Name: Draco <br /> Age: 4 years <br /> Hobbies: Chewing on Socks
            <button type="button" name="button">
              <router-link to="/Login"><span style="color: black">Walk Me!</span></router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="card">Hello! My Name is: <br /> Bowie
        <img
          src="https://d39w7f4ix9f5s9.cloudfront.net/dims4/default/fd8aa2e/2147483647/strip/true/crop/2448x1899+0+682/resize/812x630!/quality/90/?url=http%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2Fd1%2F41%2F5a46bdbc4d12b8e11ce2fb6f22ff%2F20180105-dogsatwork-013.JPG"
          alt="">
        <div class="overlay">
          <div class="text">Name: Bowie <br /> Age: 4 years <br /> Hobbies: Chewing on Socks
            <button type="button" name="button">
              <router-link to="/Login"><span style="color: black">Walk Me!</span></router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>




</div>
</template>


<style>
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

/* Float four columns side by side */
.column {
  float: left;
  width: 25%;
  padding: 0 10px;
  height: 20%;
}

/* Remove extra left and right margins, due to padding in columns */
.row {
  margin: 0 -5px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Style the counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  /* this adds the "card" effect */
  padding: 16px;
  margin-bottom: 10px;
  margin-top: 10px;
  text-align: center;
  background-color: #f1f1f1;
  height: 250px;
}

/* Responsive columns - one column layout (vertical) on small screens */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }

  img {
    width: 400px;

  }
}

h1,
h2 {
  font-family: 'Indie Flower', cursive;
}

img {
  width: 120px;
  height: 150px;
  object-fit: cover;
}


.column {
  position: relative;
}

.image {
  display: block;
  width: 100%;
  height: auto;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 1;
  right: 0;
  height: 100%;
  width: 97%;
  opacity: 0;
  transition: .5s ease;
  background-color: #ff3385;
}

.column:hover .overlay {
  opacity: 1;
}

.text {
  color: white;
  font-size: 13px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);

}
</style>


<script>
</script>
