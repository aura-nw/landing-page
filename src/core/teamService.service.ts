import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TeamService {
  staffData: any[] = [];
  dataType: 'advisor' | 'team' = 'advisor';
  advisorData = [
    {
      name: 'Frank Bignone',
      img: 'frankBignone.png',
      position: `Former VP & Head of<br/>Digital Transformation<br/>in Asia-Pacific & China | Airbus`,
      desc: 'Previously at Airbus, he led a regional team to implement Airbus\'s digital' +
        'platform strategy Skywise, alongside developing strategic digital initiatives and' +
        'optimize Airbus services. Frank advices Aura on growth strategy and global ' +
        'business development',
      link: {
        linkedIn: 'https://www.linkedin.com/in/frank-b-12046716/'
      }
    },
    {
      name: 'Dr. Truong Gia Binh',
      img: 'TruongGiaBinh.png',
      position: `Founder & Chairman of<br/>FPT Corporation`,
      desc: 'Dr. Binh supports Aura expanding business relation as well as advance Aura goals by facilitating integrations with the growing number of industry partners. ',
      link: {
        linkedIn: 'https://www.linkedin.com/in/binh-truong-gia-9a9b2260/'
      }
    },
    {
      name: 'Vinh Nguyen',
      img: 'VinhNguyen.png',
      position: `Coin98 Finance<br/>Founder & CEO`,
      desc: 'Vinh is a tech expert from Coin98 Finance, he advices Aura on various technological matter, especially in the token generation, wallet, multichain and bridging aspects. ',
      link: {
        linkedIn: 'https://www.linkedin.com/in/vinhthenguyen/',
        twitter: 'https://twitter.com/drofin69'
      }
    },
    {
      name: 'Thanh Le',
      img: 'ThanhLe.png',
      position: `Coin98 Finance<br/>Founder`,
      desc: 'Thanh is an entrepreneur and expert in developing cryptocurrency community. He provides valuable insight on how to scale Aura community and connecting with other crypto partners. ',
      link: {
        linkedIn: 'https://www.linkedin.com/in/imlethanh/',
        twitter: 'https://twitter.com/imlethanh98'
      }
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
      link: {
        linkedIn: 'https://www.linkedin.com/in/hoang-giang-tran-078423b5/'
      }
    },
    {
      name: 'Yamato Tran',
      img: 'YamatoTran.png',
      position: `Co-founder`,
      desc: 'As a startup enthusiast with extensive experience as COO of FPT Software, Yamato had led several RPA and blockchain incubators to spin off with successful fund investments.',
      link: {
        linkedIn: 'https://www.linkedin.com/in/trandanghoa/'
      }
    },
    {
      name: 'Steve Nguyen',
      img: 'SteveNguyen.png',
      position: `Co-Founder`,
      desc: 'Steve has more than 25 years of profound experience in Digital transformation as CIO of various giant corporations such as Unilever and Masan Group in Vietnam. ' +
        'Steve guides Aura’s technical operations and project integration.',
      link: {
        linkedIn: 'https://www.linkedin.com/in/steve-nguy%E1%BB%85n-anh-nguy%C3%AAn-84321043/'
      }
    },
    {
      name: 'Osamu Suzuki',
      img: 'OsamuSuzuki.png',
      position: `Head of Global Business`,
      desc: 'Suzuki draws on his past experiences as a senior consultant in DX and new business strategy with AI and Blockchain to advance Aura in growth acquisition. ' +
        'Suzuki explores potentials and facilitates integrations with Global partners.',
      link: {
        linkedIn: 'https://www.linkedin.com/in/osamu-suzuki-7024a1200/'
      }
    },
    {
      name: 'Long Nguyen',
      img: 'LongNguyen.png',
      position: `CTO`,
      desc: 'Long is a software architect, he has been building consortium blockchain systems for international enterprises since 2018. ' +
        'Grad from Aalto Unviersty and Université de Lorraine, major in security and privacy.',
      link: {
        linkedIn: 'https://www.linkedin.com/in/eledra/'
      }
    },
    {
      name: 'Thu Tran',
      img: 'ThuTran.png',
      position: `COO`,
      desc: 'Thu is a former lead of marketing communication and partnership for a leading Southeast Asia IT services provider. ' +
        'She advances Aura’s branding and communication strategy, and explores opportunities for growth acquisition of its ecosystem and partners.',
      link: {
        linkedIn: 'https://www.linkedin.com/in/thu-tran-88708b163/'
      }
    },
    {
      name: 'James Le',
      img: 'JamesLe.png',
      position: `Head of Business Development`,
      desc: 'James has 7+ years of experience in business development in various domains including real estate, online marketing and value-added services. ' +
        'He is in charge of developing Aura’s business integrations with the growing number of partners.',
      link: {
        linkedIn: 'https://www.linkedin.com/in/duc-le-minh-akachain-consultant/'
      }
    },
    {
      name: 'Tai Nguyen',
      img: 'TaiNguyen.png',
      position: `Head of Operation`,
      desc: 'Tai has more than 10 years of experience as a product manager. ' +
        'His main focus is building strong product delivery team, managing project activities such as planning, issues tracking and risk management.',
      link: {
        linkedIn: 'https://www.linkedin.com/in/tai-nguyen-30595917a/'
      }
    },
    {
      name: 'Claire Nguyen',
      img: 'ClaireNguyen.png',
      position: `Marketing Leader`,
      desc: 'With 5 years of experience in community growth and marketing management in Digital Banking and Enterprise Blockchain, ' +
        'Claire drives Aura’s community engagement, development, and sustainable growth.',
      link: {
        linkedIn: 'https://www.linkedin.com/in/viet-chinh-nguyen/'
      }
    }
  ];

  public dataSourceType = new BehaviorSubject(this.dataType);
  public dataSource = new BehaviorSubject(this.staffData);

  constructor() {
    this.switchStaffData('advisor');
  }

  switchStaffData(dataType: 'advisor' | 'team') {
    this.dataType = dataType;
    this.staffData = (this.dataType === 'advisor') ? this.advisorData : this.teamData;
    this.dataSource.next(this.staffData);
    this.dataSourceType.next(this.dataType);
  }
}
