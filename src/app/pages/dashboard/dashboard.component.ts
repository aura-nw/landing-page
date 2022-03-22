import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TeamService} from '../../../core/teamService.service';
import {SlickCarouselComponent} from 'ngx-slick-carousel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  staffData: any[] = [];
  isAdvisors = true;
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
          slidesToScroll: 1,
          arrows: true,
        }
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
        }
      }
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
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        }
      }
    ]
  };
  // MockData
  featureCardData = [
    {
      icon: 'icon-cosmos',
      title: `Built on Cosmos, powerful&nbsp;for&nbsp;developers:`,
      subTitle: 'Supporting both game-fi and social-fi, BUIDL any Dapps on Aura Network'
    },
    {
      icon: 'icon-control',
      title: 'Stay ahead of the Metaverse game: ',
      subTitle: 'Brand renaissance through NFTs is a new way to connect with customers, fans, and users'
    },
    {
      icon: 'icon-microchip',
      title: 'All about NFTs and interoperability:',
      subTitle: 'Expanding the usability and unlimited potential of NFTs with Aura Network'
    }
  ];
  roadmapData = [
    {
      icon: 'icon-megaphone',
      date: '11/2021',
      content: [
        'Whitepaper',
        'Announcement',
        'Establish Entity'
      ],
    },
    {
      icon: 'icon-target',
      date: 'Q1/2022',
      content: [
        'Strategic Round'
      ],
    },
    {
      icon: 'icon-sports-flag',
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
      icon: 'icon-globe',
      date: 'Q3/2022',
      content: [
        'Aura Mainnet',
        'Governance Tool',
        `Integrate with C98 ecosystem <br/>(Wallet, Marketplace)`,
        'IBC enable for native token'
      ],
    },
    {
      icon: 'icon-control-outline',
      date: 'Q4/2022',
      content: [
        'NFT game supports',
        `First NFT use case candidates:<br/>NFT fan token`
      ],
    },
    {
      icon: 'icon-people',
      date: '2023',
      content: [
        'IBC enable for NFT',
        'First Metaverse Integration',
        'Collaboration with Enterprise blockchain.',
        'Launch at least 2 games'
      ],
    }
  ];
  @ViewChild('slickModal') slickModal: SlickCarouselComponent | undefined;
  @ViewChild('advisorSection') advisorSection!: ElementRef;
  constructor(
    public teamService: TeamService
  ) {}

  ngOnInit() {
    this.teamService.dataSource.subscribe(data => {
      this.staffData  = data;
      this.slickModal?.slickGoTo(0);
    });
    this.teamService.dataSourceType.subscribe(type => this.isAdvisors = (type === 'advisor'));
  }

  switchStaffData(dataType: 'advisor' | 'team') {
    this.advisorSection.nativeElement.classList.remove('fade');
    this.teamService.switchStaffData(dataType);
    this.advisorSection.nativeElement.classList.add('fade');
  }
}
