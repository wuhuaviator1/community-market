<template>
  <Navbar />
  <section id="body">
    <div id="color" class="container bootstrap snippet">
      <!-- <div class="row">
                  <div class="col-sm-10"><h1>User name</h1></div>
                  <div class="col-sm-2"><a href="/users" class="pull-right"><img title="profile image" class="img-circle img-responsive" src="http://www.gravatar.com/avatar/28fd20ccec6865e2d5f0e1f4446eb7bf?s=100"></a></div>
              </div> -->
      <div class="row">
        <div class="col-sm-3">
          <!--left col-->

          <!-- <div class="text-center">
            <img
              src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png"
              class="avatar img-circle img-thumbnail"
              alt="avatar"
            />
            <h6>Upload a different photo...</h6>
            <input type="file" class="text-center center-block file-upload" />
          </div> -->
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

                    <p class="information" v-for="item in data">
                      {{ item.firstName }}
                    </p>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-xs-6">
                    <label for="last_name"><h4>Last name</h4></label>
                    <p class="information" v-for="item in data">
                      {{ item.lastName }}
                    </p>
                  </div>
                </div>

                <div class="form-group">
                  <div class="col-xs-6">
                    <label for="phone"><h4>Phone</h4></label>
                    <p class="information" v-for="item in data">
                      {{ item.phone }}
                    </p>
                  </div>
                </div>

                <div class="form-group">
                  <div class="col-xs-6">
                    <label for="email"><h4>Email</h4></label>
                    <p class="information" v-for="item in data">
                      {{ item.email }}
                    </p>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-xs-6">
                    <label for="location"><h4>Address</h4></label>
                    <p class="information" v-for="item in data">
                      {{ item.address }}
                    </p>
                  </div>
                </div>
                <!-- <div class="form-group">
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
                </div> -->
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

  <div>
    <!-- <ul v-if="data.length"> -->
    <!-- <p v-for="item in data">{{ item.email }}</p> -->
    <!-- <p>{{ data[0].email }}</p> -->
    <!-- </ul> -->
  </div>

  <!-- <div> -->
  <!-- <p>First Name: {{ data.firstName }}</p>
    <p>Last Name: {{ data.lastName }}</p> -->
  <!-- </div> -->
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
      // userId: "",
      data: [],
    };
  },
  async mounted() {
    const response = await fetch(
      "http://localhost:3001/api/users/profile/testId2"
    );
    if (response.ok) {
      this.data = await response.json();
      console.log(this.data);
      // console.log(1);
    }
  },
};
</script>

<style>
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

.information {
  color: rgb(173, 156, 156);
}
</style>
