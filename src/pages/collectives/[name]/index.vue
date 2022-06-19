<script setup lang="ts">
const activeTab = ref('all')
const props = defineProps({
    name: String
})
const people = [
    {
        name: 'Adrian Lewis',
        photo: '/images/person4.png'
    },
    {
        name: 'Michele Y',
        photo: '/images/person6.png'
    },
    {
        name: 'Caroline M',
        photo: '/images/person4.png'
    },
    {
        name: 'Adam Smith',
        photo: '/images/person5.png'
    },
]
const contributionTypes = [
    {
        avatar:  "/images/collectives/tiers/av-gold.png",
        background:  "/images/collectives/tiers/gold.png",
        name: "Gold",
        tags: "Recurring Contribution",
        bio: "Join us for Rp10.000,00 per month and support us",
        price: 10000
    },
    {
        avatar:  "/images/collectives/tiers/av-plat.png",
        background:  "/images/collectives/tiers/plat.png",
        name: "Platinum",
        tags: "Recurring Contribution",
        bio: "Join us for Rp100.000,00 per month and support us",
        price: 20000
    },
    {
        avatar:  "/images/collectives/tiers/av-diamond.png",
        background:  "/images/collectives/tiers/diamond.png",
        name: "Diamond",
        tags: "Recurring Contribution",
        bio: "Join us for Rp500.000,00 per month and support us",
        price: 500000
    },
    {
        avatar:  "/images/collectives/tiers/av-unranked.png",
        background:  "/images/collectives/tiers/unranked.png",
        name: "Custom Donation",
        tags: "One Time/Recurring",
        bio: "Custom",
        price: 0
    },
]

const transactions = [
    {
        title: "Monthly financial contribution to Github (Gold)",
        from: "Adrian Lewis",
        to: "Github",
        type: 'contribution',
        date: 'June 19, 2022',
        amount: 10000,
        avatar: '/images/person4.png'
    },
    {
        title: "Monthly financial contribution to Github (Gold)",
        from: "Michele Y",
        to: "Github",
        type: 'contribution',
        date: 'June 19, 2022',
        amount: 10000,
        avatar: '/images/person6.png'
    },
    {
        title: "Project maintenance",
        from: "Gabrilla",
        to: "Github",
        type: 'expense',
        date: 'June 19, 2022',
        amount: 7000000,
        avatar: '/images/person4.png'
    },
    {
        title: "Monthly financial contribution to Github (Gold)",
        from: "Adam Smith",
        to: "Github",
        type: 'contribution',
        date: 'June 19, 2022',
        amount: 10000,
        avatar: '/images/person5.png'
    },
    {
        title: "Transport fees to Github Event",
        from: "Michele Y",
        to: "Github",
        type: 'expense',
        date: 'June 19, 2022',
        amount: 200000,
        avatar: '/images/person6.png'
    },
    {
        title: "Building Fees",
        from: "Adrian Lewis",
        to: "Github",
        type: 'expense',
        date: 'June 19, 2022',
        amount: 3000000,
        avatar: '/images/person4.png'
    },
]
const numberFormat = (num: number) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 1 }).format(num)
}

const store = useMainStore()
</script>

<template>
    <div class="user-wallpaper | h-64 " :style="{ background: `url(${store.currentProject.background})`}"></div>
    <section class="user-detail">
        <Container>
            <div class="user-avatar avatar-square flex">
                <div class="w-40 h-40 -translate-y-15">
                    <img :src="store.currentProject.avatar" alt="Github Icon" class="object-cover h-full">
                </div>
                <div class="user-detail-text | ml-5 mt-5 lg:w-1/2 w-full">
                    <h1 class="text-4xl text-black font-semibold">{{ store.currentProject.name }}</h1>
                    <p class="text-neutral-500 mt-2">{{ store.currentProject.bio }}</p>
                </div>
            </div>
        </Container>
    </section>

    <!-- User stats -->
    <section class="user-stats mb-24 mt-8">
        <Container>
            <div class="cards | flex gap-10 flex-wrap justify-center md:justify-start">
                <div class="card shadow-xl px-3 rounded-xl w-48">
                    <img src="/images/icons/collective-stats/contributors.svg" alt="Contributors count">
                    <div class="card-text p-5 pt-0">
                        <h5 class="text-lg font-semibold mb-3">Contributors</h5>
                        <h5>100</h5>
                    </div>
                </div>
                <div class="card shadow-xl px-3 rounded-xl w-48">
                    <img src="/images/icons/collective-stats/raised-total.svg" alt="Contributors count">
                    <div class="card-text p-5 pt-0">
                        <h5 class="text-lg font-semibold mb-3">Raised total</h5>
                        <h5>Rp 50 Milions</h5>
                    </div>
                </div>
                <div class="card shadow-xl px-3 rounded-xl w-48">
                    <img src="/images/icons/collective-stats/target.svg" alt="Contributors count">
                    <div class="card-text p-5 pt-0">
                        <h5 class="text-lg font-semibold mb-3">Target</h5>
                        <h5>Rp 1 Billion</h5>
                    </div>
                </div>
                <div class="card shadow-xl px-3 rounded-xl w-48">
                    <img src="/images/icons/collective-stats/orgtype.svg" alt="Contributors count">
                    <div class="card-text p-5 pt-0">
                        <h5 class="text-lg font-semibold mb-3">Org type</h5>
                        <h5>Profit</h5>
                    </div>
                </div>
            </div>
        </Container>
    </section>


    <section class="total-raised">
        <Container>
        <div class="raised-text | flex flex-col items-center gap-5">
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
                        v-for="contributionType in contributionTypes"
                        :name="contributionType.name"
                        :bio="contributionType.bio"
                        :background="contributionType.background"
                        :avatar="contributionType.avatar"
                        :collectiveName="name"
                        class="w-full flex-shrink-0 lg:w-[30%] mb-8"
                        :tags="[contributionType.tags]">
                        <template #belowAbout>
                            <div class="inline-flex items-end gap-2 my-5 mb-8">
                                <h3 class="text-2xl font-semibold">{{contributionType.price == 0 ? 'Rp ????' : numberFormat(contributionType.price)}}</h3>
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
                    <card-user-small v-for="person in people" :name="person.name" status="Owner" class="p-0" :src="person.photo"></card-user-small>
                </div>
            </div>
        </Container>
    </section>
    <section class="contributors | mt-16 mb-32">
        <Container>
            <h1 class="section-title | mb-10 text-black font-semibold text-4xl">Thank You for the Contributors!</h1>
            <div class="section-content">
                <div class="cards | grid grid-cols-2 md:grid-cols-5 gap-5">
                    <card-user-small v-for="i in 21" :name="people[i%4].name" class="w-full" status="Platinum" :src="people[i%4].photo"></card-user-small>
                </div>
            </div>
        </Container>
    </section>
    <section class="transactions | mt-16 mb-32">
        <Container>
            <h1 class="section-title | mb-4 text-black font-semibold text-4xl">Transactions</h1>
            <p class="mb-10">Transparent and open finances.</p>

            <div class="section-content">

                <!-- Balance Cards -->
                <div class="balance-cards | inline-flex gap-5 justify-center md:justify-start rounded-xl flex-wrap">
                    <div class="balance-card mr-5 p-8 rounded-xl">
                        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26 0.625C11.9871 0.625 0.625 11.9871 0.625 26C0.625 40.0129 11.9871 51.375 26 51.375C40.0129 51.375 51.375 40.0129 51.375 26C51.375 11.9871 40.0129 0.625 26 0.625ZM27.2631 38.3023L27.2744 40.0979C27.2744 40.3471 27.0705 40.5566 26.8213 40.5566H25.2127C24.9635 40.5566 24.7596 40.3527 24.7596 40.1035V38.325C19.7299 37.9512 17.3623 35.0852 17.1074 31.9699C17.0848 31.7037 17.2943 31.4771 17.5605 31.4771H20.1773C20.3982 31.4771 20.5908 31.6357 20.6248 31.851C20.9137 33.6465 22.3127 34.9889 24.8219 35.323V27.2404L23.4229 26.8836C20.4605 26.1756 17.6398 24.3291 17.6398 20.5002C17.6398 16.3711 20.7777 14.1508 24.7879 13.76V11.8908C24.7879 11.6416 24.9918 11.4377 25.241 11.4377H26.8326C27.0818 11.4377 27.2857 11.6416 27.2857 11.8908V13.743C31.1656 14.1338 34.077 16.3994 34.4168 19.9281C34.4451 20.1943 34.2355 20.4266 33.9637 20.4266H31.4205C31.1939 20.4266 31.0014 20.2566 30.973 20.0357C30.7465 18.3818 29.4211 17.0338 27.2631 16.7393V24.3461L28.7018 24.6803C32.3721 25.5865 34.8699 27.3424 34.8699 31.2732C34.8699 35.5383 31.698 37.9172 27.2631 38.3023ZM21.1629 20.2396C21.1629 21.6783 22.0521 22.7941 23.9666 23.4852C24.2328 23.5928 24.499 23.6777 24.8162 23.7684V16.7449C22.7262 17.0111 21.1629 18.1836 21.1629 20.2396ZM27.7615 27.8975C27.6029 27.8635 27.4443 27.8238 27.2631 27.7729V35.3457C29.676 35.1305 31.3412 33.8051 31.3412 31.5848C31.3412 29.8459 30.4406 28.7131 27.7615 27.8975Z" fill="black"/>
                        </svg>

                        <h4 class="text-black font-semibold mt-3 text-xl">Today’s balance</h4>

                        <div class="balance__amount | mt-8 font-semibold">
                            <h5 class="text-gray-500">Rp</h5>
                            <h5>400.000,00</h5>
                        </div>
                    </div>
                    <div class="balance-card mr-5 p-8 rounded-xl">
                        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26 0.625C11.9871 0.625 0.625 11.9871 0.625 26C0.625 40.0129 11.9871 51.375 26 51.375C40.0129 51.375 51.375 40.0129 51.375 26C51.375 11.9871 40.0129 0.625 26 0.625ZM27.2631 38.3023L27.2744 40.0979C27.2744 40.3471 27.0705 40.5566 26.8213 40.5566H25.2127C24.9635 40.5566 24.7596 40.3527 24.7596 40.1035V38.325C19.7299 37.9512 17.3623 35.0852 17.1074 31.9699C17.0848 31.7037 17.2943 31.4771 17.5605 31.4771H20.1773C20.3982 31.4771 20.5908 31.6357 20.6248 31.851C20.9137 33.6465 22.3127 34.9889 24.8219 35.323V27.2404L23.4229 26.8836C20.4605 26.1756 17.6398 24.3291 17.6398 20.5002C17.6398 16.3711 20.7777 14.1508 24.7879 13.76V11.8908C24.7879 11.6416 24.9918 11.4377 25.241 11.4377H26.8326C27.0818 11.4377 27.2857 11.6416 27.2857 11.8908V13.743C31.1656 14.1338 34.077 16.3994 34.4168 19.9281C34.4451 20.1943 34.2355 20.4266 33.9637 20.4266H31.4205C31.1939 20.4266 31.0014 20.2566 30.973 20.0357C30.7465 18.3818 29.4211 17.0338 27.2631 16.7393V24.3461L28.7018 24.6803C32.3721 25.5865 34.8699 27.3424 34.8699 31.2732C34.8699 35.5383 31.698 37.9172 27.2631 38.3023ZM21.1629 20.2396C21.1629 21.6783 22.0521 22.7941 23.9666 23.4852C24.2328 23.5928 24.499 23.6777 24.8162 23.7684V16.7449C22.7262 17.0111 21.1629 18.1836 21.1629 20.2396ZM27.7615 27.8975C27.6029 27.8635 27.4443 27.8238 27.2631 27.7729V35.3457C29.676 35.1305 31.3412 33.8051 31.3412 31.5848C31.3412 29.8459 30.4406 28.7131 27.7615 27.8975Z" fill="black"/>
                        </svg>

                        <h4 class="text-black font-semibold mt-3 text-xl">Total Expenses</h4>

                        <div class="balance__amount | mt-8 font-semibold">
                            <h5 class="text-gray-500">Rp</h5>
                            <h5>400.000,00</h5>
                        </div>
                    </div>
                    <div class="balance-card mr-5 p-8 rounded-xl">
                        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26 0.625C11.9871 0.625 0.625 11.9871 0.625 26C0.625 40.0129 11.9871 51.375 26 51.375C40.0129 51.375 51.375 40.0129 51.375 26C51.375 11.9871 40.0129 0.625 26 0.625ZM27.2631 38.3023L27.2744 40.0979C27.2744 40.3471 27.0705 40.5566 26.8213 40.5566H25.2127C24.9635 40.5566 24.7596 40.3527 24.7596 40.1035V38.325C19.7299 37.9512 17.3623 35.0852 17.1074 31.9699C17.0848 31.7037 17.2943 31.4771 17.5605 31.4771H20.1773C20.3982 31.4771 20.5908 31.6357 20.6248 31.851C20.9137 33.6465 22.3127 34.9889 24.8219 35.323V27.2404L23.4229 26.8836C20.4605 26.1756 17.6398 24.3291 17.6398 20.5002C17.6398 16.3711 20.7777 14.1508 24.7879 13.76V11.8908C24.7879 11.6416 24.9918 11.4377 25.241 11.4377H26.8326C27.0818 11.4377 27.2857 11.6416 27.2857 11.8908V13.743C31.1656 14.1338 34.077 16.3994 34.4168 19.9281C34.4451 20.1943 34.2355 20.4266 33.9637 20.4266H31.4205C31.1939 20.4266 31.0014 20.2566 30.973 20.0357C30.7465 18.3818 29.4211 17.0338 27.2631 16.7393V24.3461L28.7018 24.6803C32.3721 25.5865 34.8699 27.3424 34.8699 31.2732C34.8699 35.5383 31.698 37.9172 27.2631 38.3023ZM21.1629 20.2396C21.1629 21.6783 22.0521 22.7941 23.9666 23.4852C24.2328 23.5928 24.499 23.6777 24.8162 23.7684V16.7449C22.7262 17.0111 21.1629 18.1836 21.1629 20.2396ZM27.7615 27.8975C27.6029 27.8635 27.4443 27.8238 27.2631 27.7729V35.3457C29.676 35.1305 31.3412 33.8051 31.3412 31.5848C31.3412 29.8459 30.4406 28.7131 27.7615 27.8975Z" fill="black"/>
                        </svg>

                        <h4 class="text-black font-semibold mt-3 text-xl">Total Income</h4>

                        <div class="balance__amount | mt-8 font-semibold">
                            <h5 class="text-gray-500">Rp</h5>
                            <h5>400.000,00</h5>
                        </div>
                    </div>
                </div>

                <!-- Transaction History -->
                <div class="transactions-history mt-12">
                    <div class="transaction__type">
                        <ul>
                            <li>
                                <a href="#" @click.prevent="activeTab = 'all'" :class="{'label-pill':true, 'active': activeTab == 'all'}">All</a>
                            </li>
                            <li>
                                <a href="#" @click.prevent="activeTab = 'expense'" :class="{'label-pill expense':true, 'active': activeTab == 'expense'}">Expenses</a>
                            </li>
                            <li>
                                <a href="#" @click.prevent="activeTab = 'contribution'" :class="{'label-pill transactions':true, 'active': activeTab == 'contribution'}">Transactions</a>
                            </li>
                        </ul>
                    </div>

                    <!-- Transactions -->
                    <div class="transaction-list | rounded-lg my-10 border border-gray-300 pr-8 w-full lg:w-2/3">
                        <div class="transaction | mb-2" v-for="transaction in transactions.filter(t => activeTab == 'all' ? true : t.type == activeTab)">
                            <div class="top | flex">
                                <img :src="transaction.avatar" alt="Photo" class="w-16 h-16 md:w-25 md:h-25">
                                <div class="detail-text mt-0 md:mt-6">
                                    <h3 class="text-lg font-semibold">{{ transaction.title }}</h3>
                                    <p class="text-sm text-gray-600" v-if="transaction.type == 'contribution'">Credit from <a href="#" class="text-link">{{ transaction.from }}</a> to <a href="#" class="text-link">{{ transaction.to }}</a></p>
                                    <p class="text-sm text-gray-600" v-else>By <a href="#" class="text-link">{{ transaction.from }}</a></p>
                                </div>
                                <div class="the-amount mt-0 md:mt-6 ml-auto text-right">
                                    <h3 class="text-lg font-medium mb-2">
                                        <!-- Plus or Minus -->
                                        <span :class="transaction.type == 'expense' ? 'text-red-600' : 'text-green-600'">{{ transaction.type == 'expense' ? "-" : "+" }}</span>
                                        {{ numberFormat(transaction.amount) }}
                                    </h3>
                                    <span class="bg-green-200 text-sm text-green-800 font-bold px-3 py-1 rounded-full">{{transaction.type  == 'expense' ? 'PAID' : 'COMPLETED'}}</span>
                                </div>
                            </div>
                            <div class="bottom">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </section>

</template>
<route lang="yaml">
meta:
  layout: home
</route>
<style lang="scss">
.about p {
    @apply mb-5 text-left;
}
.transaction__type ul {
    display: flex;
    gap: 1rem;
}
.label-pill {
    display: inline-block;
    @apply rounded-full border border-gray-200 p-2 px-4 text-sm hover:bg-gray-100 transition duration-100;
    &.active {
        background: var(--bg-gradient-primary);
        color: white;
        border: none;
        @apply shadow-lg;
    }
}
.balance-card {
    background-color: #f1f1f1;;
    min-width: 236px;
}
</style>
