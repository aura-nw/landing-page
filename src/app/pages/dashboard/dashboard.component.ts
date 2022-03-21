import {Component, OnInit} from '@angular/core';
import {TeamService} from '../../../core/teamService.service';

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
      }
    ]
  };
  // MockData
  featureCardData = [
    {
      icon: 'icon-chain',
      title: `Built on Cosmos, powerful&nbsp;for&nbsp;developers:`,
      subTitle: 'Supporting both game-fi and social-fi, BUIDL any Dapps on Aura Network.'
    },
    {
      icon: 'icon-film',
      title: 'Stay ahead of the Metaverse game: ',
      subTitle: 'Providing brands an open infrastructure to ride the wave of digital&nbsp;transformation.'
    },
    {
      icon: 'icon-heart',
      title: 'All about NFTs:',
      subTitle: 'Expanding the usability of NFTs.'
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

  constructor(
    public teamService: TeamService
  ) {}

  ngOnInit() {
    this.teamService.dataSource.subscribe(data => this.staffData  = data);
    this.teamService.dataSourceType.subscribe(type => this.isAdvisors = (type === 'advisor'));
  }

  switchStaffData(dataType: 'advisor' | 'team') {
    this.teamService.switchStaffData(dataType);
  }
}
