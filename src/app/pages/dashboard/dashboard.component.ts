import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  isAdvisors = true;
  staffData: any[] = [];
  // SlideConfig
  featureSlideConfig = {
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: false,
    variableWidth: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  teamSlideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    infinite: false,
    variableWidth: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          arrows: true,
        }
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          arrows: true,
        }
      },
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: true,
        }
      },
    ]
  };
  roadmapSlideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    variableWidth: true,
    mobileFirst: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        }
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        }
      },
    ]
  };
  // MockData
  featureCardData = [
    {
      icon: 'icon-chain',
      title: 'Built on Cosmos, powerful for developers:',
      subTitle: 'Supporting both game-fi and social-fi, BUIDL any Dapps on Aura Network.'
    },
    {
      icon: 'icon-film',
      title: 'Stay ahead of the Metaverse game: ',
      subTitle: 'Providing brands an open infrastructure to ride the wave of digital transformation.'
    },
    {
      icon: 'icon-heart',
      title: 'All about NFTs:',
      subTitle: 'Expanding the usability of NFTs'
    }
  ];
  advisorData = [
    {
      name: 'Frank Bignone',
      img: 'frankBignone.png',
      position: `Former VP & Head of<br/>Digital Transformation<br/>in Asia-Pacific & China | Airbus`,
      desc: 'Previously at Airbus, he led a regional team to implement Airbus\'s digital' +
        'platform strategy Skywise, alongside developing strategic digital initiatives and' +
        'optimize Airbus services. Frank advices Aura on growth strategy and global ' +
        'business development',
      link: '#'
    },
    {
      name: 'Dr. Truong Gia Binh',
      img: 'TruongGiaBinh.png',
      position: `Founder & Chairman of<br/>FPT Corporation`,
      desc: 'Dr. Binh supports Aura expanding business relation as well as advance Aura goals by facilitating integrations with the growing number of industry partners. ',
      link: '#'
    },
    {
      name: 'Vinh Nguyen',
      img: 'VinhNguyen.png',
      position: `Coin98 Finance<br/>Founder & CEO`,
      desc: 'Vinh is a tech expert from Coin98 Finance, he advices Aura on various technological matter, especially in the token generation, wallet, multichain and bridging aspects. ',
      link: '#'
    },
    {
      name: 'Thanh Le',
      img: 'ThanhLe.png',
      position: `Coin98 Finance<br/>Founder`,
      desc: 'Thanh is an entrepreneur and expert in developing cryptocurrency community. He provides valuable insight on how to scale Aura community and connecting with other crypto partners. ',
      link: '#'
    }
  ];
  teamData = [
    {
      name: 'Giang Tran',
      img: 'GiangTran.png',
      position: `Founder`,
      desc: 'As a Forbes Technology Council member, Giang has deep expertise in Cloud and Enterprise Blockchain. ' +
        'He is the founder of akaChain and had guided numbers of successful startups with his value driven leadership and strong startup mindset.' +
        'Giang drives Aura’s strategy adoption and equitable growth.',
      link: 'https://www.linkedin.com/in/hoang-giang-tran-078423b5/'

    },
    {
      name: 'Yamato Tran',
      img: 'YamatoTran.png',
      position: `Co-founder`,
      desc: 'As a startup enthusiast with extensive experience as COO of FPT Software, Yamato had led several RPA and blockchain incubators to spin off with successful fund investments.',
      link: 'https://www.linkedin.com/in/trandanghoa/'
    },
    {
      name: 'Steve Nguyen',
      img: 'SteveNguyen.png',
      position: `Co-Founder`,
      desc: 'Steve has more than 25 years of profound experience in Digital transformation as CIO of various giant corporations such as Unilever and Masan Group in Vietnam. ' +
        'Steve guides Aura’s technical operations and project integration.',
      link: 'https://www.linkedin.com/in/steve-nguy%E1%BB%85n-anh-nguy%C3%AAn-84321043/'
    },
    {
      name: 'Osamu Suzuki',
      img: 'OsamuSuzuki.png',
      position: `Head of Global Business`,
      desc: 'Suzuki draws on his past experiences as a senior consultant in DX and new business strategy with AI and Blockchain to advance Aura in growth acquisition. ' +
        'Suzuki explores potentials and facilitates integrations with Global partners.',
      link: 'https://www.linkedin.com/in/osamu-suzuki-7024a1200/'
    },
    {
      name: 'Long Nguyen',
      img: 'LongNguyen.png',
      position: `CTO`,
      desc: 'Long is a software architect, he has been building consortium blockchain systems for international enterprises since 2018. ' +
        'Grad from Aalto Unviersty and Université de Lorraine, major in security and privacy.',
      link: 'https://www.linkedin.com/in/eledra/'
    },
    {
      name: 'Thu Tran',
      img: 'ThuTran.png',
      position: `COO`,
      desc: 'Thu is a former lead of marketing communication and partnership for a leading Southeast Asia IT services provider. ' +
        'She advances Aura’s branding and communication strategy, and explores opportunities for growth acquisition of its ecosystem and partners.',
      link: 'https://www.linkedin.com/in/thu-tran-88708b163/'
    },
    {
      name: 'James Le',
      img: 'JamesLe.png',
      position: `Head of Business Development`,
      desc: 'James has 7+ years of experience in business development in various domains including real estate, online marketing and value-added services. ' +
        'He is in charge of developing Aura’s business integrations with the growing number of partners.',
      link: 'https://www.linkedin.com/in/duc-le-minh-akachain-consultant/'
    },
    {
      name: 'Tai Nguyen',
      img: 'TaiNguyen.png',
      position: `Head of Operation`,
      desc: 'Tai has more than 10 years of experience as a product manager. ' +
        'His main focus is building strong product delivery team, managing project activities such as planning, issues tracking and risk management.',
      link: 'https://www.linkedin.com/in/tai-nguyen-30595917a/'
    },
    {
      name: 'Claire Nguyen',
      img: 'ClaireNguyen.png',
      position: `Marketing Leader`,
      desc: 'With 5 years of experience in community growth and marketing management in Digital Banking and Enterprise Blockchain, ' +
        'Claire drives Aura’s community engagement, development, and sustainable growth.',
      link: 'https://www.linkedin.com/in/viet-chinh-nguyen/'
    }
  ];
  roadmapData = [
    {
      icon: 'icon-announcement',
      color: '#3772FF',
      date: '11/2021',
      content: [
        'Whitepaper',
        'Announcement',
        'Establish Entity'
      ],
    },
    {
      icon: 'icon-target',
      color: '#FFBA69',
      date: 'Q1/2022',
      content: [
        'Strategic Round'
      ],
    },
    {
      icon: 'icon-hdd-network',
      color: '#9757D7',
      date: 'Q2/2022',
      content: [
        'IEO',
        'Aura Testnet',
        'Smart Contract & DAPP SDK',
        'Aura Playground',
        'Aura Explorer',
        'Aura Multi-Sig Safe'
      ],
    },
    {
      icon: 'icon-key',
      color: '#EF466F',
      date: 'Q3/2022',
      content: [
        'Aura Mainnet',
        'Governance Tool',
        `Integrate with C98 ecosystem <br/>(Wallet, Marketplace)`,
        'IBC enable for native token'
      ],
    },
    {
      icon: 'icon-key',
      color: '#45B26B',
      date: 'Q4/2022',
      content: [
        'NFT game supports',
        `First NFT use case candidates:<br/>NFT fan token`
      ],
    },
    {
      icon: 'icon-people',
      color: '#FF7979',
      date: '2023',
      content: [
        'IBC enable for NFT',
        'First Metaverse Integration',
        'Collaboration with Enterprise blockchain.',
        'Launch at least 2 games'
      ],
    }
  ];

  constructor() {}

  ngOnInit(): void {
    this.staffData = this.advisorData;
  }
  switchStaffData() {
    this.staffData = this.isAdvisors ? this.advisorData : this.teamData;
  }
}
