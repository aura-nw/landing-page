import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import 'slick-carousel';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  currentQuarter = 1;
  // SlideConfig
  featureSlideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    infinite: false,
    variableWidth: true,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  teamSlideConfig = {
    slidesToShow: 1,
    mobileFirst: true,
    infinite: false,
    centerMode: true,
    arrows: true,
    centerPadding: '28px',
    responsive: [
      {
        breakpoint: 767.9,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
          infinite: false,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          centerMode: false,
          infinite: false,
        },
      },
      // {
      //   breakpoint: 1439,
      //   settings: {
      //     slidesToShow: 3,
      //     centerMode: true,
      //     // variableWidth: true
      //   },
      // },
      // {
      //   breakpoint: 1600,
      //   settings: {
      //     slidesToShow: 4,
      //     slidesToScroll: 1,
      //     variableWidth: true,
      //   }
      // },
      // {
      //   breakpoint: 1920,
      //   settings: {
      //     initialSlide: 2,
      //     slidesToShow: 4,
      //     slidesToScroll: 1,
      //     centerMode: true,
      //   }
      // },
      // {
      //   breakpoint: 3000,
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 1,
      //     variableWidth: true,
      //   }
      // }
    ],
  };

  roadmapSlideConfig = {
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: false,
    mobileFirst: true,
    arrows: true,
    initialSlide: this.currentQuarter,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          variableWidth: true,
        },
      }
    ],
  };
  // MockData
  featureCardData = [
    {
      icon: 'PlanetRocket',
      title: `Built on Cosmos, powerful&nbsp;for&nbsp;developers`,
      subTitle:
        'Supporting both game-fi and social-fi, BUIDL any Dapps on Aura Network',
    },
    {
      icon: 'Rocket',
      title: 'Brands renaissance',
      subTitle:
        'Stay ahead of the game and provide new momentum with Aura Network framework, the innovative way to boost customers, users or fans engagement',
    },
    {
      icon: 'Planet',
      title: 'Tailored for NFT owners',
      subTitle:
        'Interchain connection and interoperability, NFT swapping and bridging - things that were simply not possible before!',
    },
  ];
  roadmapData = [
    {
      icon: 'icon-megaphone',
      date: '11/2021',
      content: ['Whitepaper', 'Foundation'],
    },
    {
      icon: 'icon-target',
      date: 'Q1-2022',
      content: ['Strategic Round'],
    },
    {
      icon: 'icon-sports-flag',
      date: 'Q2-2022',
      content: [
        'Aura Testnet',
        'Smart Contract & DAPP SDK',
        'Aura Playground',
        'Aura Explorer',
        'Aura Multi-Sig Safe',
      ],
    },
    {
      icon: 'icon-globe',
      date: 'Q3-2022',
      content: [
        'Aura Mainnet',
        'Governance Tool',
        `Integrate with C98 ecosystem (Wallet, Marketplace)`,
        'IBC enablement for native token',
      ],
    },
    {
      icon: 'icon-control-outline',
      date: 'Q4-2022',
      content: ['NFT games support', `First NFT use case - NFT fan token`],
    },
    {
      icon: 'icon-people',
      date: '2023',
      content: [
        'IBC enablement for NFTs',
        'First Metaverse Integration',
        'Enterprise blockchain collaboration',
        'NFT games launch',
      ],
    },
  ];
  advisorData = [
    {
      name: 'Dr. Truong Gia Binh',
      img: 'TruongGiaBinh.png',
      position: `Founder & Chairman`,
      company: 'FPT Corporation',
      desc: 'Dr. Binh supports Aura in expanding business relations and advancing Aura\'s goals by facilitating integrations with the growing number of industry partners.',
      link: {
        linkedIn: 'https://www.linkedin.com/in/binh-truong-gia-9a9b2260/',
      },
    },
    {
      name: 'Vinh Nguyen',
      img: 'VinhNguyen.png',
      position: `Founder & CEO`,
      company: 'Coin98 Finance',
      desc: 'Vinh is the founder and technical expert of Coin98 Finance. He advises Aura on the various technological matters, especially in the token generation, wallet, multichain and bridging aspects.',
      link: {
        linkedIn: 'https://www.linkedin.com/in/vinhthenguyen/',
        twitter: 'https://twitter.com/drofin69',
      },
    },
    {
      name: 'Thanh Le',
      img: 'ThanhLe.png',
      position: `Founder`,
      company: 'Coin98 Finance',
      desc: 'Thanh Le is co-founder of Coin98, who contributes a lot for cryptocurrencies’ community. He provides valuable insight on scaling the Aura community and connecting with other crypto partners.',
      link: {
        linkedIn: 'https://www.linkedin.com/in/imlethanh/',
        twitter: 'https://twitter.com/imlethanh98',
      },
    },
    {
      name: 'Frank Bignone',
      img: 'frankBignone.png',
      position: `Former VP and Head of DT`,
      company: 'Airbus',
      desc:
        'He led a regional team to implement Airbus\'s digital platform strategy Skywise, ' +
        'and developing strategic digital initiatives and optimize Airbus services. ' +
        'Frank advices Aura on growth strategy and global business development.',
      link: {
        linkedIn: 'https://www.linkedin.com/in/frank-b-12046716/',
      },
    },
  ];
  teamData = [
    {
      name: 'Giang Tran',
      img: 'GiangTran.png',
      position: `Founder`,
      desc: `As a Forbes Technology Council member, Giang has deep expertise in Cloud and Blockchain. He is the ex-founder of akaChain and has guided many successful start-ups. Giang drives Aura's strategy adoption and equitable growth.`,
      link: {
        linkedIn: 'https://www.linkedin.com/in/hoang-giang-tran-078423b5/',
        twitter: 'https://twitter.com/GiangTr41516054',
      },
    },
    {
      name: 'Yamato Tran',
      img: 'YamatoTran.png',
      position: `Co-founder`,
      desc: `As a startup enthusiast with extensive experience as COO of FPT Software, Yamato had led several RPA and blockchain incubators to spin off with successful fund investments.
      Yamato leads Aura’s vision and expands its partnership network.`,
      link: {
        linkedIn: 'https://www.linkedin.com/in/trandanghoa/',
      },
    },
    {
      name: 'Steve Nguyen',
      img: 'SteveNguyen.png',
      position: `Co-Founder`,
      desc:
        'Steve has more than 25 years of profound experience in Digital transformation as CIO of various giant corporations such as Unilever and Masan Group in Vietnam. ' +
        'Steve guides Aura’s technical operations and project integration.',
      link: {
        linkedIn:
          'https://www.linkedin.com/in/steve-nguy%E1%BB%85n-anh-nguy%C3%AAn-84321043/',
      },
    },
    {
      name: 'Osamu Suzuki',
      img: 'OsamuSuzuki.png',
      position: `Head of Global Business`,
      desc:
        'Suzuki draws on his past experiences as a senior consultant in DX and new business strategy with AI and Blockchain to advance Aura in growth acquisition. ' +
        'Suzuki explores potentials and facilitates integrations with Global partners.',
      link: {
        linkedIn: 'https://www.linkedin.com/in/osamu-suzuki-7024a1200/',
      },
    },
    {
      name: 'Long Nguyen',
      img: 'LongNguyen.png',
      position: `CTO`,
      desc: `Graduated from Aalto University and Université de Lorraine, majoring in security and privacy. Long has been building consortium blockchain systems for international enterprises since 2018, he leads Aura’s technology strategy.`,
      link: {
        linkedIn: 'https://www.linkedin.com/in/eledra/',
        twitter:
          'https://twitter.com/EledraNguyen?t=CGG4tS7B0yetqboEDBIw_Q&s=09',
      },
    },
    {
      name: 'Thu Tran',
      img: 'ThuTran.png',
      position: `COO`,
      desc: `Thu is the former marketing and partnership lead of a Southeast Asia IT services provider. She advances Aura's strategic planning and opportunities for growth acquisition of its ecosystem and partners community.`,
      link: {
        linkedIn: 'https://www.linkedin.com/in/thu-tran-88708b163/',
      },
    },
    {
      name: 'James Le',
      img: 'JamesLe.png',
      position: `Head of Business Development`,
      desc: 'James has 7+ years of experience in business development in various domains including real estate, online marketing and value-added services. He is in charge of developing Aura’s business integrations with the growing number of partners.',
      link: {
        linkedIn:
          'https://www.linkedin.com/in/duc-le-minh-akachain-consultant/',
      },
    },
    {
      name: 'Tai Nguyen',
      img: 'TaiNguyen.png',
      position: `Head of Operation`,
      desc:
        'Tai has more than 10 years of experience as a product manager. ' +
        'His main focus is building strong product delivery team, managing project activities such as planning, issues tracking and risk management.',
      link: {
        linkedIn: 'https://www.linkedin.com/in/tai-nguyen-30595917a/',
      },
    },
    {
      name: 'Claire Nguyen',
      img: 'ClaireNguyen.png',
      position: `Marketing Lead`,
      desc: `With five years of marketing management experience in Digital Banking and Enterprise Blockchain, Claire drives Aura's marketing communication development and execution.`,
      link: {
        linkedIn: 'https://www.linkedin.com/in/viet-chinh-nguyen/',
      },
    },
  ];
  faqData = [
    {
      quest: 'How does Aura Network differ from other chains?',
      anw: 'Interoperability is everything. As a chain tailored for NFTs, we provide robust end-to-end solutions and purpose-built networks that enable NFTs swapping.',
    },
    {
      quest: 'Where can I learn more about Aura Network?',
      anw: `Visit our Blog, Insights, <a href='https://docs.aura.network/' class="text--green">Docs</a>, <a href='https://github.com/aura-nw' class="text--green">Github</a>
            for constant updates or shoot any question on our community channels (<a href='https://discord.gg/sKsvpQTAzP' class="text--green">Discord</a> and <a href='https://t.me/+zjYMBoLBslkwZjU1' class="text--green">Telegram</a>)!`,
    },
    {
      quest: 'Does Aura Network have a bug bounty program available?',
      anw: `Stay tuned, coming soon. Sign-up for our newsletter and follow us on <a href='https://discord.gg/sKsvpQTAzP' class="text--green">Discord</a> for exclusive events and updates!`,
    },
    {
      quest: 'Why building on Cosmos?',
      anw: 'Agility and Cosmos IBC. Cosmos solves the limitations of “the old blockchains”. The backbone of the Cosmos ecosystem, IBC handles transport across different sovereign blockchains.',
    },
    {
      quest: 'When is Aura Network’s mainnet?',
      anw: 'Aura Mainnet is going to be released at the end of the third quarter of 2022. Stay tuned!',
    },
    {
      quest: 'Will there be an Aura token?',
      anw: 'It will be released by IEO',
    },
    {
      quest: 'What is Aura safe?',
      anw: `Aura Safe is a user-friendly application that allows users to create multi-signature accounts with fine-grained access control for the Cosmos ecosystem.
      If you are familiar with Gnosis-safe for Ethereum, it is quite similar. Find out more here:
      <a href='https://github.com/aura-nw/safe-react' class="text--green">https://github.com/aura-nw/safe-react</a>`,
    },
  ];
  @ViewChild('advisorSection') advisorSection!: ElementRef;

  advisorySlickSubject = new Subject<'next' | 'pre'>();
  teamSlickSubject = new Subject<'next' | 'pre'>();
  advisorySlick: any;
  teamSlick: any;

  constructor() {
    const today = new Date();
    this.currentQuarter = Math.floor((today.getMonth() + 3) / 3);
    this.roadmapSlideConfig.initialSlide = this.currentQuarter;
  }

  ngOnInit() {
    this.advisorySlickSubject
      .asObservable()
      .pipe(delay(1))
      .subscribe((type: 'next' | 'pre') => {
        if (type === 'next') {
          this.advisorySlick.slickNext();
        } else {
          this.advisorySlick.slickPrev();
        }
      });

    this.teamSlickSubject
      .asObservable()
      .pipe(delay(1))
      .subscribe((type: 'next' | 'pre') => {
        if (type === 'next') {
          this.teamSlick.slickNext();
        } else {
          this.teamSlick.slickPrev();
        }
      });
  }

  afterAdvisoryChange(e): void {
    this.slickChange(e, this.advisorData, this.advisorySlickSubject);
  }

  advisoryInit(e): void {
    const nextArrow: HTMLElement = e.slick.$prevArrow[0];
    nextArrow?.classList.add('slick-disabled');

    this.advisorySlick = e.slick;

    this.toggleAttribute(e);
  }

  afterTeamChange(e): void {
    // this.slickChange(e, this.teamData, this.teamSlickSubject);
  }

  teamInit(e): void {
    const nextArrow: HTMLElement = e.slick.$prevArrow[0];
    nextArrow?.classList.add('slick-disabled');
    this.teamSlick = e.slick;

    this.toggleAttribute(e);
  }

  slickChange(e, data, subject): void {
    const slick = e.slick;

    if (!slick.activeBreakpoint) { return; }

    const offset =
      slick.breakpointSettings[slick.activeBreakpoint]?.slidesToShow - 1;

    if (e.currentSlide === data.length - offset) {
      const nextArrow: HTMLElement = e.slick.$nextArrow[0];
      nextArrow.classList.add('slick-disabled');
    } else if (e.currentSlide === 1) {
      const nextArrow: HTMLElement = e.slick.$prevArrow[0];
      nextArrow.classList.add('slick-disabled');
    }

    if (e.first) {
      subject.next('next');
    } else if (e.currentSlide === data.length - (offset - 1)) {
      subject.next('pre');
    }
  }

  toggleAttribute(e): void {
    const next = e?.nextSlide || 1;
    const slick = e.slick;
    const offset =
      +slick.breakpointSettings[slick.activeBreakpoint]?.slidesToShow - 1;

    Object.keys(slick.$slides).forEach((element) => {
      if (isNaN(Number(element))) { return; }

      if (
        +element === next - 1 ||
        +element === next ||
        (offset === 2 && +element === next + 1)
      ) {
        (slick.$slides[element] as HTMLElement)?.setAttribute(
          'data-active',
          '1'
        );
      } else {
        const data = +element > next ? 2 : 0;
        (slick.$slides[element] as HTMLElement)?.setAttribute(
          'data-active',
          data.toString()
        );
      }
    });
  }

  roadMapSlickChange(e): void {
    const next = e?.nextSlide;
    const slick = e.slick;
    const offset =
      +slick.breakpointSettings[slick.activeBreakpoint]?.slidesToShow - 1;

    Object.keys(slick.$slides).forEach((element) => {
      if (isNaN(Number(element))) { return; }

      if (
        +element === next ||
        +element === next + 1 ||
        (offset === 2 && +element === next + 2)
      ) {
        (slick.$slides[element] as HTMLElement)?.setAttribute(
          'data-active',
          '1'
        );
      } else {
        const data = +element > next ? 2 : 0;
        (slick.$slides[element] as HTMLElement)?.setAttribute(
          'data-active',
          data.toString()
        );
      }
    });
  }
}
