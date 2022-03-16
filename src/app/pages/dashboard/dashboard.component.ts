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
      subTitle: 'Providing brands an open infrastructure to ride the wave of digital transformation, which enhances brand value, encourages customer’s engagement and conversion.'
    },
    {
      icon: 'icon-heart',
      title: 'All about NFTs:',
      subTitle: 'Expanding the usability of NFTs'
    }
  ];
  advisorData = [
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
    }
  ];
  teamData = [
    {
      name: 'Dr. Truong Gia Binh',
      img: 'staff_1.png',
      position: `Founder & Chairman of<br/>FPT Corporation`,
      desc: 'Dr. Binh supports Aura expanding business relation as well as advance Aura goals by facilitating integrations with the growing number of industry partners. '
    },
    {
      name: 'Vinh Nguyen 2',
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
