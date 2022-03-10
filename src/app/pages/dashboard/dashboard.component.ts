import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  featureSlideConfig = {
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: false,
    variableWidth: true,
    arrows: false,
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
  isAdvisors = true;
  featureCardData = [
    {
      icon: 'icon-chain',
      text: 'Comprehensive DAPP eco-system connecting to brands and I.P owners’ portfolio'
    },
    {
      icon: 'icon-film',
      text: 'Authentic engagement with customers and fans'
    },
    {
      icon: 'icon-heart',
      text: 'All about expanding NFTs liquidity and usability'
    }
  ];
  staffData: any[] = [];
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

  constructor() {}

  ngOnInit(): void {
    this.staffData = this.advisorData;
  }
  switchStaffData() {
    this.staffData = this.isAdvisors ? this.advisorData : this.teamData;
  }
}
