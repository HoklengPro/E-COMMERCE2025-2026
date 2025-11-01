<template>
  <div class="app">
    <h1>My Vue Practice - Components</h1>

    <!-- 🟢 CATEGORY SECTION -->
    <div class="category-list">
      <CategoryComponent
        v-for="category in categories"
        :key="category.title"
        :name="category.title"
        :items="category.items"
        :bgColor="category.bgColor"
        :image="category.image"
      />
    </div>

    <!-- 🟣 PROMOTION SECTION -->
    <div class="promotion-list">
      <PromotionComponent
        v-for="promo in promotions"
        :key="promo.title"
        :title="promo.title"
        :description="promo.description"
        :banner="promo.banner"
        :bgColor="promo.bgColor"
      >
        <!-- Add click event on button -->
        <ButtonComponent
          :label="promo.buttonText"
          color="#3bb77e"
          @click="shopNow(promo)"
        />
      </PromotionComponent>
    </div>
  </div>
</template>

<script setup>
import CategoryComponent from './components/CategoryComponent.vue'
import PromotionComponent from './components/PromotionComponent.vue'
import ButtonComponent from './components/ButtonComponent.vue'

// Import category images
import image1 from '@/assets/images/image1.png'
import image2 from '@/assets/images/image2.png'
import image3 from '@/assets/images/image3.png'
import image4 from '@/assets/images/image4.png'
import image5 from '@/assets/images/image5.png'
import image6 from '@/assets/images/image6.png'
import image7 from '@/assets/images/image7.png'
import image8 from '@/assets/images/image8.png'
import image9 from '@/assets/images/image9.png'
import image10 from '@/assets/images/image10.png'

// Import promotion images
import logo1 from '@/assets/images/logo1.png'
import logo2 from '@/assets/images/logo2.png'
import logo3 from '@/assets/images/logo3.png'

// 🟢 Category Data
const categories = [
  { title: "Cake & Milk", items: 14, bgColor: "#FEEFEA", image: image1 },
  { title: "Peach", items: 17, bgColor: "#FFF3EB", image: image2 },
  { title: "Organic Kiwi", items: 21, bgColor: "#EAF7E9", image: image3 },
  { title: "Red Apple", items: 68, bgColor: "#FEEAEA", image: image4 },
  { title: "Snack", items: 34, bgColor: "#FFFBEA", image: image5 },
  { title: "Black Plum", items: 25, bgColor: "#F3EBFF", image: image6 },
  { title: "Vegetables", items: 65, bgColor: "#EAF7F0", image: image7 },
  { title: "Headphone", items: 33, bgColor: "#EBF5FF", image: image8 },
  { title: "Cereal", items: 40, bgColor: "#FFF5EB", image: image9 },
  { title: "Orange", items: 63, bgColor: "#FFF0E5", image: image10 },
]

// 🟣 Promotion Data
const promotions = [
  {
    title: "Everyday Fresh & Clean with Our Products",
    description: "Healthy and fresh groceries delivered to your home.",
    banner: logo1,
    buttonText: "Shop Now",
    bgColor: "#FFF3EB"
  },
  {
    title: "Make your Breakfast Healthy and Easy",
    description: "Start your day with milk and fruits.",
    banner: logo2,
    buttonText: "Shop Now",
    bgColor: "#F3E8E8"
  },
  {
    title: "The Best Organic Products Online",
    description: "Fresh vegetables and fruits available all week.",
    banner: logo3,
    buttonText: "Shop Now",
    bgColor: "#E7EAF3"
  }
]

// 🟢 Methods
const shopNow = (promotion) => {
  alert("Let's shop: " + promotion.title)
}
</script>

<style scoped>
.app {
  background-color: #f8f9fa;
  padding: 40px;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  min-height: 100vh;
}

h1 {
  margin-bottom: 30px;
  color: #253d4e;
  font-size: 28px;
  font-weight: 600;
}

/* 🟢 CATEGORY SECTION */
.category-list {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding: 20px 0;
  width: 100%;
}

.category-list > * {
  flex: 0 0 136px;
  height: 177px;
  border-radius: 10px;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.category-list > *:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

/* 🟣 PROMOTION SECTION */
.promotion-list {
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  gap: 20px;
  flex-wrap: nowrap;
  overflow-x: auto;
  width: 100%;
  margin-top: 20px;
}

.promotion-list > * {
  flex: 0 0 512px;
  height: 300px;
  border-radius: 10px;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.promotion-list > *:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
}

/* Scrollbar styling */
.category-list::-webkit-scrollbar,
.promotion-list::-webkit-scrollbar {
  height: 8px;
}

.category-list::-webkit-scrollbar-thumb,
.promotion-list::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 10px;
}

@media (max-width: 1200px) {
  .promotion-list > * {
    flex: 0 0 45%;
  }
}
@media (max-width: 768px) {
  .promotion-list > * {
    flex: 0 0 90%;
  }
  .category-list > * {
    flex: 0 0 45%;
  }
}
</style>