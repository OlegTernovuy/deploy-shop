import Image from "next/image";
import logo from '../../../../public/logo-footer.svg'

import facebookLogo from '../../../../public/facebook_line.svg'
import youtubeLogo from '../../../../public/youtube-line.svg'
import instaLogo from '../../../../public/insta.svg'
import { footerBlock } from "./footer.data";

interface IFooterData {
  head: string;
  subHeaders: string[];
}

const Footer = () => {
  return (
    <footer className="py-6 px-4 bg-deWiseBlack text-white md:flex md:justify-around">
      <div className="flex flex-col md:justify-center md:items-center">
        <Image src={logo} alt="Logo" width={193} height={72} priority={true}/>
        <span className="flex pt-6 gap-6">
          <Image src={facebookLogo} alt="facebookLogo" width={32} height={32}/>
          <Image src={youtubeLogo} alt="youtubeLogo" width={32} height={32}/>
          <Image src={instaLogo} alt="instaLogo" width={32} height={32}/>
        </span>
      </div>
      <div className="md:flex md:space-x-5">
        {footerBlock.length ? (
          footerBlock.map((item: IFooterData) => {
            return (
              <div key={item.head} className="pt-8 md:pt-0">
                <h2 className="pb-6 text-Headline5 text-deWiseGray">{item.head}</h2>
                <ul>
                {item.subHeaders.map((el: string, index: number) => {
                  return <li key={index} className="text-base pb-4 last:pb-0">{el}</li>;
                })}
                </ul>
              </div>
            );
          })
        ) : (
          <div>Not Data</div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
