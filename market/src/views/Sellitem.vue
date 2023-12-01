<template>
  <div class="home">
    <Navbar />
    <header class="home-header">
      <h1>Please Upload information of your selling items:</h1>
    </header>
    <section>
      <div class="file-upload">
        <button
          class="file-upload-btn"
          type="button"
          @click="triggerFileUpload"
        >
          Add Image
        </button>

        <div
          class="image-upload-wrap"
          @dragover.prevent="addDragOverClass"
          @dragleave="removeDragOverClass"
        >
          <input
            class="file-upload-input"
            type="file"
            @change="readURL"
            accept="image/*"
            ref="fileInput"
          />
          <div class="drag-text">
            <h3>Drag and drop a file or select add Image</h3>
          </div>
        </div>

        <div class="file-upload-content" v-if="isFileUploaded">
          <img
            class="file-upload-image"
            :src="uploadedImage"
            alt="your image"
          />
          <div class="image-title-wrap">
            <button type="button" @click="removeUpload" class="remove-image">
              Remove <span class="image-title">{{ fileName }}</span>
            </button>
          </div>
        </div>

        <button class="upload-btn" @click="uploadToDatabase">
          Upload Image
        </button>
      </div>

      <div class="file-upload">
        <!-- Input fields for product details -->
        <div class="product-details">
          <form @submit.prevent="submit">
            <input v-model="productName" placeholder="Product Name" />
            <input v-model="productUsageTime" placeholder="Usage Time" />
            <input v-model="productPrice" placeholder="Price" type="number" />
          </form>
        </div>

        <!-- Button to save product details -->
        <button class="upload-btn" @click="saveProductInfo">
          Save Product Info
        </button>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "SellItem",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      isFileUploaded: false,
      uploadedImage: "",
      fileName: "",
      productName: "",
      productUsageTime: "",
      productPrice: null,
    };
  },
  methods: {
    readURL(event) {
      const input = event.target;
      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.uploadedImage = e.target.result;
          this.isFileUploaded = true;
          this.fileName = input.files[0].name;
        };
        reader.readAsDataURL(input.files[0]);
      } else {
        this.removeUpload();
      }
    },
    removeUpload() {
      this.isFileUploaded = false;
      this.uploadedImage = "";
      this.fileName = "";
    },
    triggerFileUpload() {
      this.$refs.fileInput.click();
    },
    addDragOverClass() {
      // Add any class or style changes when dragging over
    },
    removeDragOverClass() {
      // Remove the class or style changes when not dragging over
    },
    uploadToDatabase() {
      // Logic to upload image to database
    },
    saveProductInfo() {
      // Logic to save product details to database
    },
  },
};

async function uploadGood(good) {
  const response = await fetch("http://localhost:3001/api/uploadGood", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(good),
  });
  if (!response.ok) throw new Error("Upload failed");
  return await response.json();
}
</script>

<style scoped>
.home {
  background-color: rgb(33, 29, 29);
}
.home-header {
  text-align: center;
  padding: 50px;
  background: rgb(33, 29, 29);
}

.home-header h1 {
  color: white;
}

body {
  font-family: sans-serif;
  background-color: #eeeeee;
}

.file-upload {
  background-color: #ffffff;
  /* height: 60rem; */
  width: 40rem;
  margin: 0 auto;
  padding: 20px;
}

.file-upload-btn {
  width: 100%;
  margin: 0;
  color: #fff;
  background: #1fb264;
  border: none;
  padding: 10px;
  border-radius: 4px;
  border-bottom: 4px solid #15824b;
  transition: all 0.2s ease;
  outline: none;
  text-transform: uppercase;
  font-weight: 700;
}

.file-upload-btn:hover {
  background: #1aa059;
  color: #ffffff;
  transition: all 0.2s ease;
  cursor: pointer;
}

.file-upload-btn:active {
  border: 0;
  transition: all 0.2s ease;
}

.file-upload-content {
  display: none;
  text-align: center;
}

.file-upload-input {
  position: absolute;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  outline: none;
  opacity: 0;
  cursor: pointer;
}

.image-upload-wrap {
  margin-top: 20px;
  border: 4px dashed #1fb264;
  position: relative;
}

.image-dropping,
.image-upload-wrap:hover {
  background-color: #1fb264;
  border: 4px dashed #ffffff;
}

.image-title-wrap {
  padding: 0 15px 15px 15px;
  color: #222;
}

.drag-text {
  text-align: center;
}

.drag-text h3 {
  font-weight: 100;
  text-transform: uppercase;
  color: #15824b;
  padding: 60px 0;
}

.file-upload-image {
  max-height: 200px;
  max-width: 200px;
  margin: auto;
  padding: 20px;
}

.remove-image {
  width: 200px;
  margin: 0;
  color: #fff;
  background: #cd4535;
  border: none;
  padding: 10px;
  border-radius: 4px;
  border-bottom: 4px solid #b02818;
  transition: all 0.2s ease;
  outline: none;
  text-transform: uppercase;
  font-weight: 700;
}

.remove-image:hover {
  background: #c13b2a;
  color: #ffffff;
  transition: all 0.2s ease;
  cursor: pointer;
}

.remove-image:active {
  border: 0;
  transition: all 0.2s ease;
}

.file-upload-image {
  max-height: 200px;
  max-width: 100%;
  object-fit: cover;
  /* Adjust as needed */
}

.upload-btn {
  width: 100%;
  margin-top: 10px;
  /* Rest of your button styling */
}

.product-details input {
  width: 100%;
  margin: 10px 0;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
<<<<<<< HEAD

#morespace{
  height: 52rem;
}

=======
>>>>>>> ef3f31a39389a757868ac9ec7e1fef1a34aacb8c
</style>
