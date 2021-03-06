<script lang="ts" setup>
const store = useMainStore()
const router = useRouter()
const route = useRoute()

const discover = useDiscover()

const search = route.query.search
store.search = search?.toString() || ""

</script>

<template>
  <section class="discover-hero | relative">
    <div class="discover-hero-bg">
      <div class="overlay | absolute inset-0 w-full h-full opacity-80 bg-black" />
      <img src="/images/discover.png" alt="Discover background">
    </div>
    <div
      class="discover-hero-text | text-center absolute left-50% top-50% -translate-x-50% -translate-y-50% w-full lg:w-1/3 mx-auto">
      <h1 class="text-4xl font-bold text-white">
        Discover Great Projects
      </h1>
      <form @submit.prevent="store.submitSearch">
        <div class="input-with-icon | relative w-full mt-10">
          <div i-carbon-search inline-block color="gray-400" class="absolute left-3 top-3" />
          <input v-model="store.search" type="text"
            class="navbar__search | rounded-full border w-full border-indigo-500 px-5 py-2 pl-10 text-white  bg-transparent "
            placeholder="Search funding here.." >
        </div>
      </form>
    </div>
  </section>

  <!-- Section category -->
  <section class="category | my-16">
    <Container>
      <div v-if="route.query.search">
        <h1 class="text-black text-4xl font-semibold">
          Search for: {{ route.query.search }}
        </h1>
      </div>
      <div v-else class="w-full md:w-2/3 mx-auto">
        <h4 class="text-2xl mb-5 font-semibold text-black">
          Category
        </h4>

        <div class="cards-wrapper ">
          <div class="cards gap-5 grid grid-cols-2 lg:grid-cols-4">
            <div class="card shadow-xl rounded-lg flex w-full items-center hover:shadow-2xl hover:cursor-pointer">
              <img src="/images/icons/categories/organization.svg" alt="Organization Icon">
              <h5 class="text-lg font-semibold">
                Organization
              </h5>
            </div>
            <div class="card shadow-xl rounded-lg flex w-full items-center hover:shadow-2xl hover:cursor-pointer">
              <img src="/images/icons/categories/event.svg" alt="Organization Icon">
              <h5 class="text-lg font-semibold">
                Event
              </h5>
            </div>
            <div class="card shadow-xl rounded-lg flex w-full items-center hover:shadow-2xl hover:cursor-pointer">
              <img src="/images/icons/categories/projects.svg" alt="Organization Icon">
              <h5 class="text-lg font-semibold">
                Projects
              </h5>
            </div>
            <div class="card shadow-xl rounded-lg flex w-full items-center hover:shadow-2xl hover:cursor-pointer">
              <img src="/images/icons/categories/research.svg" alt="Organization Icon">
              <h5 class="text-lg font-semibold">
                Research
              </h5>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>

  <section class="collectives mb-24">
    <Container>
      <div class="flex justify-between mb-10">
        <div class="choose-tags">
          <h3 class="text-black text-2xl mb-5 font-semibold">
            Popular Tags
          </h3>
          <div class="tags">
            <a href="#" class="tag">open-source</a>
            <a href="#" class="tag">health</a>
            <a href="#" class="tag">extension</a>
            <a href="#" class="tag">covid-19</a>
          </div>
        </div>
      </div>
      <div class="collectives-container | grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-10">
        <collective-card v-for="project in store.allProjects" :avatar="project.avatar" :background="project.background"
          :name="project.name" :tags="project.tags" :bio="project.bio" :totalDonation="project.totalDonation"
          :targetDonation="project.targetDonation" @click="store.currentProject=project"/>
      </div>

      <!-- Pagination -->
      <div class="pagination mt-16">
        <a href="#" class="pagination-number icon ">
          <div i-carbon-chevron-left class="mx-auto mt-3" />
        </a>
        <a class="pagination-number active">
          1
        </a>
        <a href="#" class="pagination-number">
          2
        </a>
        <a href="#" class="pagination-number">
          3
        </a>
        <a href="#" class="pagination-number icon ">
          <div i-carbon-chevron-right class="mx-auto mt-3" />
        </a>
      </div>
    </Container>
  </section>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

<style lang="scss">
.tag {
  @apply border-gray-700 hover:bg-gray-700 hover:text-white bg-transparent px-2 py-1 border border-gray-700 rounded-full mr-5;
}

.pagination {
  @apply flex gap-2 justify-center w-full;

  .pagination-number {
    @apply w-12 h-12 border border-gray-500 text-center leading-10 rounded-full;

    &:not(.active) {
      &:hover {
        @apply bg-gray-500 text-white shadow-lg;
      }
    }

    &.active {
      @apply text-white shadow-lg border-none;
      background: var(--bg-gradient-primary)
    }
  }
}
</style>
