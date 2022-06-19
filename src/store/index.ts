import { defineStore } from 'pinia'


export const useMainStore = defineStore('main', () => {
  const search = ref('')

  const router = useRouter()
  const submitSearch = () => {
    router.push(`/discover?search=${search.value}`)
  }

  const projects = reactive([
    {
      avatar: '/images/projects/vuejs-avatar.png',
      background: '/images/projects/vuejs-bg.png',
      name: 'Vue Js',
      tags: ['Open Source', 'Coding', 'Programming'],
      bio: 'Vue.js is an open-source model-view-viewmodel front end JavaScript framework for building user interfaces.',
      totalDonation: 100_000_000,
      targetDonation: 1_000_000_000,
    },
    {
      avatar: '/images/projects/github-avatar.png',
      background: '/images/projects/github-bg.png',
      name: 'Github',
      tags: ['Open Source', 'Coding'],
      bio: 'GitHub, Inc. is a provider of Internet hosting for software development and social networking site for software developers',
      totalDonation: 100_000_000,
      targetDonation: 1_000_000_000,
    },
    {
      avatar: '/images/projects/tensorflow-avatar.png',
      background: '/images/projects/tensorflow-bg.png',
      name: 'Tensorflow',
      tags: ['Open Source', 'Machine Learning'],
      bio: 'TensorFlow is a free and open-source software library for machine learning and artificial intelligence.',
      totalDonation: 100_000_000,
      targetDonation: 1_000_000_000,
    },
    {
      avatar: '/images/projects/teamtrees-avatar.png',
      background: '/images/projects/teamtrees-bg.png',
      name: 'Team Trees',
      tags: ['Climate', 'Go Green'],
      bio: 'Team Trees, stylized as #TEAMTREES, is a collaborative fundraiser that raised 20 million U.S. ',
      totalDonation: 100_000_000,
      targetDonation: 1_000_000_000,
    },
    {
      avatar: '/images/projects/bazel-avatar.png',
      background: '/images/projects/bazel-bg.png',
      name: 'Team Trees',
      tags: ['Open Source', 'Coding'],
      bio: 'Bazel is a free software tool for the automation of building and testing of software.',
      totalDonation: 100_000_000,
      targetDonation: 1_000_000_000,
    },
    {
      avatar: '/images/projects/teamseas-avatar.png',
      background: '/images/projects/teamseas-bg.png',
      name: 'Team Seas',
      tags: ['Climate', 'Go Green'],
      bio: 'Team Seas, stylized as #TeamSeas, is an international collaborative fundraiser that was started by YouTubers MrBeast.',
      totalDonation: 100_000_000,
      targetDonation: 1_000_000_000,
    },
    {
      avatar: '/images/projects/gimp-avatar.png',
      background: '/images/projects/gimp-bg.png',
      name: 'GIMP',
      tags: ['Open Source', 'Coding'],
      bio: 'GIMP is a free and open-source raster graphics editor used for image manipulation and image editing, free-form drawing.',
      totalDonation: 100_000_000,
      targetDonation: 1_000_000_000,
    },
    {
      avatar: '/images/projects/svelte-avatar.png',
      background: '/images/projects/svelte-bg.png',
      name: 'Svelte',
      tags: ['Open Source', 'Coding'],
      bio: 'Svelte is a free and open-source front end compiler created by Rich Harris and maintained by the Svelte core team.',
      totalDonation: 100_000_000,
      targetDonation: 1_000_000_000,
    },
    {
      avatar: '/images/projects/manjaro-avatar.png',
      background: '/images/projects/manjaro-bg.png',
      name: 'Manjaro',
      tags: ['Open Source', 'OS'],
      bio: 'Manjaro is a free and open-source Linux distribution based on the Arch Linux operating system.',
      totalDonation: 100_000_000,
      targetDonation: 1_000_000_000,
    },
    {
      avatar: '/images/projects/ubuntu-avatar.png',
      background: '/images/projects/ubuntu-bg.png',
      name: 'Ubuntu',
      tags: ['Open Source', 'OS'],
      bio: 'Ubuntu is a Linux distribution based on Debian and composed mostly of free and open-source software.',
      totalDonation: 100_000_000,
      targetDonation: 1_000_000_000,
    },
    {
      avatar: '/images/projects/arch-avatar.png',
      background: '/images/projects/arch-bg.png',
      name: 'Arch Linux',
      tags: ['Open Source', 'OS'],
      bio: 'Arch Linux is an independently developed, x86-64 general-purpose Linux distribution that provide stable versions.',
      totalDonation: 100_000_000,
      targetDonation: 1_000_000_000,
    },
    {
      avatar: '/images/projects/vlc-avatar.png',
      background: '/images/projects/vlc-bg.png',
      name: 'VLC',
      tags: ['Open Source', 'Media Player'],
      bio: 'VLC media player is a free and open-source, portable, cross-platform media player software and streaming media server.',
      totalDonation: 100_000_000,
      targetDonation: 1_000_000_000,
    },
  ])

  const currentProject = ref({})


  const allProjects = computed(() => projects.filter(p => {
    return search.value.length ? p.name.includes(search.value) : true
  }) )

  return {
    search,
    allProjects,
    projects,
    submitSearch,
    currentProject
  }
})
