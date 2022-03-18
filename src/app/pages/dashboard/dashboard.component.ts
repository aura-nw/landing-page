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
    slidesToShow: 6,
    slidesToScroll: 5,
    infinite: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1990,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      },
    ]
  };
  roadmapSlideConfig = {
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
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
      img: 'staff_1.png',
      position: `Former VP & Head of<br/>Digital Transformation<br/>in Asia-Pacific & China | Airbus`,
      desc: 'Previously at Airbus, he led a regional team to implement Airbus\'s digital' +
        'platform strategy Skywise, alongside developing strategic digital initiatives and' +
        'optimize Airbus services. Frank advices Aura on growth strategy and global ' +
        'business development'
    },
    {
      name: 'Dr. Truong Gia Binh',
      img: 'staff_1.png',
      position: `Founder & Chairman of<br/>FPT Corporation`,
      desc: 'Dr. Binh supports Aura expanding business relation as well as advance Aura goals by facilitating integrations with the growing number of industry partners. '
    },
    {
      name: 'Vinh Nguyen',
      img: 'staff_2.png',
      position: `Coin98 Finance<br/>Founder & CEO`,
      desc: 'Vinh is a tech expert from Coin98 Finance, he advices Aura on various technological matter, especially in the token generation, wallet, multichain and bridging aspects. '
    },
    {
      name: 'Thanh Le',
      img: 'staff_3.png',
      position: `Coin98 Finance<br/>Founder`,
      desc: 'Thanh is an entrepreneur and expert in developing cryptocurrency community. He provides valuable insight on how to scale Aura community and connecting with other crypto partners. '
    },
    {
      name: 'Vinh Nguyen',
      img: 'staff_2.png',
      position: `Coin98 Finance<br/>Founder & CEO`,
      desc: 'Vinh is a tech expert from Coin98 Finance, he advices Aura on various technological matter, especially in the token generation, wallet, multichain and bridging aspects. '
    },
    {
      name: 'Thanh Le',
      img: 'staff_3.png',
      position: `Coin98 Finance<br/>Founder`,
      desc: 'Thanh is an entrepreneur and expert in developing cryptocurrency community. He provides valuable insight on how to scale Aura community and connecting with other crypto partners. '
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
      icon: 'icon-heart',
      date: '11/2021',
      content: `Whitepaper Announcement Establish Entity`,
    },
    {
      icon: 'icon-heart',
      date: '12/2021',
      content: `Strategic Round`,
    },
    {
      icon: 'icon-heart',
      date: '1/2022',
      content: `IEO Aura Token`,
    },
    {
      icon: 'icon-heart',
      date: '11/2021',
      content: `Whitepaper Announcement Establish Entity`,
    },
    {
      icon: 'icon-heart',
      date: 'Q2/2022',
      content: `Aura Testnet<br/>Aura Wallet<br/>Aura Explorer`,
    },
    {
      icon: 'icon-heart',
      date: 'Q3/2022',
      content: `Aura Mainnet<br/>Governance Tool`,
    },
    {
      icon: 'icon-heart',
      date: 'Q4/2022',
      content: `First NFT use case`,
    },
    {
      icon: 'icon-heart',
      date: '2023',
      content: `Bridge to public chain (e.g., ETH)<br/>
                Bridge to private chain (e.g., Hyperledger Fabric)<br/>
                First Metaverse Integration`,
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.staffData = this.advisorData;
  }
  switchStaffData() {
    this.staffData = this.isAdvisors ? this.advisorData : this.teamData;
  }
}
