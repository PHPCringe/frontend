<script>
import axios from 'axios'

const collective = ref()
const props = defineProps({name: String})
onMounted(() => {
    axios.get('/collectives/'+props.name)    
        .then(res => {
            console.log(res.data)
        })
})
</script>

<template>
    <div class="user-wallpaper | h-64 bg-neutral-600"></div>
    <section class="user-detail">
        <Container>
            <div class="user-avatar avatar-square flex">
                <div class="w-40 h-40 bg-neutral-300 -translate-y-15"></div>
                <div class="user-detail-text | ml-5 mt-5 lg:w-1/2 w-full">
                    <h1 class="text-4xl text-black font-semibold">John Doe</h1>
                    <p class="text-neutral-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
            </div>
        </Container>
    </section>

    <!-- User stats -->
    <section class="user-stats mb-24 mt-8">
        <Container>
            <div class="cards | flex gap-10 flex-wrap">
                <div class="card shadow-xl px-3 rounded-xl w-42">
                    <img src="/images/icons/collective-stats/contributors.svg" alt="Contributors count">
                    <div class="card-text p-5 pt-0">
                        <h5>Contributors</h5>
                        <h5>100</h5>
                    </div>
                </div>
                <div class="card shadow-xl px-3 rounded-xl w-42">
                    <img src="/images/icons/collective-stats/raised-total.svg" alt="Contributors count">
                    <div class="card-text p-5 pt-0">
                        <h5>Raised total</h5>
                        <h5>Rp 50 Milions</h5>
                    </div>
                </div>
                <div class="card shadow-xl px-3 rounded-xl w-42">
                    <img src="/images/icons/collective-stats/contributors.svg" alt="Contributors count">
                    <div class="card-text p-5 pt-0">
                        <h5>Target</h5>
                        <h5>Rp 1 Billion</h5>
                    </div>
                </div>
                <div class="card shadow-xl px-3 rounded-xl w-42">
                    <img src="/images/icons/collective-stats/contributors.svg" alt="Contributors count">
                    <div class="card-text p-5 pt-0">
                        <h5>Org type</h5>
                        <h5>Profit</h5>
                    </div>
                </div>
            </div>
        </Container>
    </section>


    <section class="total-raised">
        <Container>
        <div class="raised-text | flex items-center gap-5">
            <h1 class="text-3xl font-semibold text-black">Rp500.000,00</h1>
            <p class="text-xl font-medium text-gray-500">Of 1 billion IDR contributed</p>
        </div>
        <progress-bar :percentage="50" class="my-5" size="lg"></progress-bar>
        </Container>
    </section>
    <section class="contribute | mt-16 mb-32">
        <Container>
            <h1 class="section-title | mb-10 text-black font-semibold text-4xl">Contribute</h1>

            <div class="section-content">
                <div class="flex flex-row flex-nowrap overflow-x-auto gap-5" >
                    <collective-card  
                        is="contribution-type"
                        v-for="i in 7" 
                        name="Gold"
                        class="w-full flex-shrink-0 lg:w-[30%] mb-8" 
                        :tags="['Recurring Contribution']">
                        <template #belowAbout>
                            <div class="inline-flex items-end gap-2 my-5 mb-8">
                                <h3 class="text-2xl font-semibold">Rp10.000,00</h3> 
                                <span class="text-sm text-gray-500">/ Month</span>
                            </div>
                        </template>
                    </collective-card>
                </div> 
            </div>
        </Container>
    </section>
    <section class="about | mt-16 mb-32">
        <Container>
            <h1 class="section-title | mb-10 text-black font-semibold text-4xl">About</h1>

            <div class="section-content">
                <p>Our mission is to promote a sustainable and healthy open source ecosystem and work for the common interests of those who create and use open source software.
                Companies get huge value from open source. But up to now, it’s been hard to give back financially unless a project formed its own foundation. Now they don’t have to. The Open Source Collective is a non-profit umbrella organisation providing financial and legal infrastructure for thousands of open source projects. It’s an API between the world of distributed collaboration and the world of accounting and invoices.</p>

                <p>Please read our Terms of Fiscal Sponsorship and acceptance criteria.</p>

                <p>For more information, please see our website: https://oscollective.org</p>

                <p>To join, click the “Apply” button at the top of this page.</p>

                <p>Open Source Collective 501(c)(6)</p>
                <p>EIN: 82-2037583</p>
                <p>340 S LEMON AVE #3717, Walnut CA 91789 USA</p>
                <p>hello@oscollective.org</p>
                <p>Contributions to Collectives hosted by OSC are not deductible as charitable contributions for U.S. federal income tax purposes.</p>

            </div>
        </Container>
    </section>
    <section class="team | mt-16 mb-24">
        <Container>
            <h1 class="section-title | mb-10 text-black font-semibold text-4xl">Meet the Team</h1>

            <div class="section-content">
                <div class="cards | flex gap-5 flex-wrap">
                    <card-user-small v-for="i in 4" name="Adrian Lewis" status="Owner" src="/images/person2.jpg"></card-user-small>
                </div>
            </div>
        </Container>
    </section>
    <section class="team | mt-16 mb-32">
        <Container>
            <h1 class="section-title | mb-10 text-black font-semibold text-4xl">Thank You for the Contributors!</h1>

            <div class="section-content">
                <div class="cards | flex gap-5 flex-wrap">
                    <card-user-small v-for="i in 21" name="Adrian Lewis" class="w-1/8" status="Backer" src="/images/person2.jpg"></card-user-small>
                </div>
            </div>
        </Container>
    </section>
    <section class="team | mt-16 mb-32">
        <Container>
            <h1 class="section-title | mb-10 text-black font-semibold text-4xl">Transactions</h1>

            <div class="section-content">
                <div class="balance-cards | flex gap-5 flex-wrap">
                </div>
            </div>
        </Container>
    </section>

</template>
<route lang="yaml">
meta:
  layout: home
</route>
<style>
.about p {
    @apply mb-5 text-left;
}
</style>
