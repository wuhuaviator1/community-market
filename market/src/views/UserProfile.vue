<template>
  <Navbar />
  <section id="body">
    <div id="color" class="container bootstrap snippet">
      <!-- <div class="row">
                <div class="col-sm-10"><h1>User name</h1></div>
                <div class="col-sm-2"><a href="/users" class="pull-right"><img title="profile image" class="img-circle img-responsive" src="http://www.gravatar.com/avatar/28fd20ccec6865e2d5f0e1f4446eb7bf?s=100"></a></div>
            </div> -->
      <div class="row">
        
          <!--left col-->

          <div class="top text-center">
            <img
              :src="imageUrl"
              class="avatar img-circle img-thumbnail"
              alt=""
            />
            <h6>Upload a photo!</h6>
            <input type="file" class="text-center center-block file-upload fontColor" @change="onFileSelected" />
          </div>

        
        <!--/col-3-->
        <div class="col-sm-9">
          <div class="tab-content">
            <div class="tab-pane active" id="home">
              <hr />
              <form
                @submit.prevent="updateUser"
                class="form"
                action="##"
                method="post"
                id="registrationForm"
              >
                <div class="form-group">
                  <div class="col-xs-6">
                    <label for="first_name"><h4>First name</h4></label>
                    <input
                      ref="firstName"
                      type="text"
                      class="form-control"
                      name="first_name"
                      id="first_name"
                      placeholder="first name"
                      title="enter your first name if any."
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-xs-6">
                    <label for="last_name"><h4>Last name</h4></label>
                    <input
                      ref="lastName"
                      type="text"
                      class="form-control"
                      name="last_name"
                      id="last_name"
                      placeholder="last name"
                      title="enter your last name if any."
                    />
                  </div>
                </div>

                <div class="form-group">
                  <div class="col-xs-6">
                    <label for="phone"><h4>Phone</h4></label>
                    <input
                      ref="phone"
                      type="text"
                      class="form-control"
                      name="phone"
                      id="phone"
                      placeholder="enter phone"
                      title="enter your phone number if any."
                    />
                  </div>
                </div>

                <div class="form-group">
                  <div class="col-xs-6">
                    <label for="email"><h4>Email</h4></label>
                    <input
                      ref="email"
                      type="email"
                      class="form-control"
                      name="email"
                      id="email"
                      placeholder="you@email.com"
                      title="enter your email."
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-xs-6">
                    <label for="location"><h4>Address</h4></label>
                    <input
                      ref="location"
                      type="text"
                      class="form-control"
                      id="location"
                      placeholder="somewhere"
                      title="enter a location"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-xs-12">
                    <br />
                    <button
                      @click="updateUser"
                      class="btn btn-lg btn-success"
                      type="button"
                    >
                      <i class="glyphicon glyphicon-ok-sign"></i> Save
                    </button>
                    <button id="Reset" class="btn btn-lg" type="reset">
                      <i class="glyphicon glyphicon-repeat"></i> Reset
                    </button>
                  </div>
                </div>
              </form>

              <hr />
            </div>
            <!--/tab-pane-->
          </div>
          <!--/tab-content-->
        </div>
        <!--/col-9-->
      </div>
      <!--/row-->
    </div>
  </section>
  <Footer />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "UserProfile",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      // 添加一个新的数据属性，用于存储表单数据
      userMessage: "",
      imageUrl: null, // 新增的图片 URL
      // userId: "",
    };
  },
  methods: {
    async updateUser() {
      // const userId = this.$refs.userId.value;
      // const userId = localStorage.getItem("userId");
      const userId = "testId2";
      console.log(userId);
      const newUserInfo = {
        // collect new user info here
        firstName: this.$refs.firstName.value,
        lastName: this.$refs.lastName.value,
        phone: this.$refs.phone.value,
        email: this.$refs.email.value,
        address: this.$refs.location.value,
      };

      console.log(newUserInfo);

      const response = await fetch(
        `http://localhost:3001/api/users/profile/${userId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userProfile: newUserInfo }),
        }
      );

      //弹出response 的json形式
      // console.log(await response.json());

      const responseData = await response.json();
      // Select only the data you care about
      // const { firstName, lastName, phone, email, location } = responseData;
      // console.log({ firstName, lastName, phone, email, location });
      console.log(responseData);

      if (!response.ok) {
        // handle error
        this.userMessage = "Failed to update user info";
      } else {
        this.userMessage = "User info updated successfully";
      }
    },

    onFileSelected(event) {
      const file = event.target.files[0];
      this.imageUrl = URL.createObjectURL(file);
    },
  },
};
</script>

<style>

.top{
  display: flex;
  flex-direction: column;
  align-items: center;
}

h6{
  padding-top: 1rem;
}

input{
  padding-top: 1rem;
  padding-left: 5rem;
}

.top img.avatar {
  width: 10rem; /* 设置图片的固定宽度 */
  height: 10rem; /* 设置图片的固定高度 */
  object-fit: cover; /* 图片保持比例填充 */
  border-radius: 50%; /* 如果您想要圆形图片 */
}

.row{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.fontColor{
  color: white;
}

#color {
  background-color: black;
}

.text-center h6 {
  color: white;
}

.col-xs-6 {
  padding-top: 10px;
}

.col-xs-6 h4 {
  color: white;
}

#Reset {
  color: white;
}

#body {
  background-color: black;
}


</style>
