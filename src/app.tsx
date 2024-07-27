import { Facebook, Instagram, Search, ShoppingCartIcon, User } from "lucide-react";
import { useState } from "react";

export function App() {
  const [isSearchInputOpen, setIsSearchInputOpen] = useState(false)

  function openSearchInput() {
    setIsSearchInputOpen(true)
  }
  function closeSearchInput() {
    setIsSearchInputOpen(false)
  }

  return (
    <div className="min-h-screen max-w-full w-screen flex flex-col ">
      <header className={`h-16 w-full flex bg-zinc-100 
        shadow-md justify-between items-center gap-6 p-6 sticky top-0 z-[1]`}>

        <div className="flex gap-2 items-center text-lime-600">
          <img src="/logo.svg" alt="EcoEden" className="size-5" />
          <h2 className="hidden sm:block text-base md:text-lg lg:text-xl]">EcoEden</h2>
        </div>
        <div className="flex gap-4 text-lime-600 w-min">
          {isSearchInputOpen ? (
            <form className="flex items-center border-2 border-lime-400 rounded-md px-2">
              <input type="text" className="outline-none bg-transparent" />
              <button type="submit">
                <Search className="size-4"></Search>
              </button>
            </form>
          ) : (
            <button onClick={openSearchInput} className="text-lime-500 text-lg font-semibold">
              <Search className="size-6"></Search>
            </button>
          )}
          <button className="text-lime-500 text-lg font-semibold">
            <User className="size-6"></User>
          </button>
          <button className="text-lime-500 text-lg font-semibold">
            <ShoppingCartIcon className="size-6"></ShoppingCartIcon>
          </button>
        </div>


      </header>


      <div id="container" className="flex-1">
        <div className="block">
          <div className="bg-banner h-36 bg-contain bg-center relative ">
            <div className="bg-offer h-28 bg-contain bg-no-repeat bg-center absolute inset-0 top-4"></div>
          </div>
        </div>

        <div className="w-full grid grid-rows- grid-cols-2 md:grid-cols-3 gap-6 p-10 place-items-center text-xs sm:text-xl">
          <div className=" w-fit flex flex-col items-start justify-center gap-3">
            <img src="/images/product- (1).png" alt="" className="w-72 " />
            <h3 className="">Lorem ipsum dolor sit <br />
              R$ <span className="text-lime-500 font-semibold">50,00</span>
            </h3>
          </div>
          <div className=" w-fit flex flex-col items-start justify-center gap-3">
            <img src="/images/product- (1).png" alt="" className="w-72 " />
            <h3>Lorem ipsum dolor sit <br />
              R$ <span className="text-lime-500 font-semibold">50,00</span>
            </h3>
          </div>
          <div className=" w-fit flex flex-col items-start justify-center gap-3">
            <img src="/images/product- (1).png" alt="" className="w-72 " />
            <h3>Lorem ipsum dolor sit <br />
              R$ <span className="text-lime-500 font-semibold">50,00</span>
            </h3>
          </div>
          <div className=" w-fit flex flex-col items-start justify-center gap-3">
            <img src="/images/product- (1).png" alt="" className="w-72 " />
            <h3>Lorem ipsum dolor sit <br />
              R$ <span className="text-lime-500 font-semibold">50,00</span>
            </h3>
          </div>
          <div className=" w-fit flex flex-col items-start justify-center gap-3">
            <img src="/images/product- (1).png" alt="" className="w-72 " />
            <h3>Lorem ipsum dolor sit <br />
              R$ <span className="text-lime-500 font-semibold">50,00</span>
            </h3>
          </div>
          <div className=" w-fit flex flex-col items-start justify-center gap-3">
            <img src="/images/product- (1).png" alt="" className="w-72 " />
            <h3>Lorem ipsum dolor sit <br />
              R$ <span className="text-lime-500 font-semibold">50,00</span>
            </h3>
          </div>
          <div className=" w-fit flex flex-col items-start justify-center gap-3">
            <img src="/images/product- (1).png" alt="" className="w-72 " />
            <h3>Lorem ipsum dolor sit <br />
              R$ <span className="text-lime-500 font-semibold">50,00</span>
            </h3>
          </div>
          <div className=" w-fit flex flex-col items-start justify-center gap-3">
            <img src="/images/product- (1).png" alt="" className="w-72 " />
            <h3>Lorem ipsum dolor sit <br />
              R$ <span className="text-lime-500 font-semibold">50,00</span>
            </h3>
          </div>
        </div>
      </div>

      <footer className="flex flex-col space-x-3 md:px-10">
        <div className="flex flex-col sm:flex-row sm:justify-between wrap items-start md:items-center px-5 md:px-0 gap-2">
          <div className="flex flex-col gap-1 text-sm">
            <a href="#">Contato</a>
            <a href="#">Termos de serviço</a>
            <a href="#">Política de privacidade</a>
            <a href="#">Cancelamento, troca e reembolso</a>
          </div>
          <form className="w-80 flex flex-col gap-2 ">
            <h2 className="text-base md:text-lg lg:text-xl font-semibold">Newsletter</h2>
            <div className="w-full flex flex-wrap gap-3 md:gap-0 px-4 sm:px-0">
              <input type="email" placeholder="Digite seu melhor e-mail" className="outline-none flex-1 rounded-md p-2 border-2" />
              <button className="bg-lime-600 hover:bg-lime-700 text-zinc-100 p-2 rounded-md w-full md:w-fit">Inscrever-se</button>
            </div>
          </form>
        </div>

        <div className="h-16 flex justify-between items-center">
          <div className="flex gap-3 items-center text-lime-600">
            <a href="#">
              <Facebook className="size-6"></Facebook>
            </a>
            <a href="#">
              <Instagram className="size-6"></Instagram>
            </a>
          </div>
          <div className="flex gap-6 w-32 md:w-auto">
            <svg className="size-5 sm:size-10" width="57" height="44" viewBox="0 0 57 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.2506 43.6126V40.7117C10.2506 39.5994 9.57357 38.8743 8.41306 38.8743C7.83292 38.8743 7.20432 39.0677 6.7691 39.6963C6.43079 39.1644 5.94733 38.8743 5.22204 38.8743C4.73837 38.8743 4.25513 39.0192 3.86815 39.5512V38.971H2.85278V43.6126H3.86815V41.05C3.86815 40.2282 4.30337 39.8412 4.98042 39.8412C5.65704 39.8412 5.99579 40.2765 5.99579 41.05V43.6126H7.01115V41.05C7.01115 40.2282 7.49439 39.8412 8.12299 39.8412C8.80005 39.8412 9.13835 40.2765 9.13835 41.05V43.6126H10.2506ZM25.2875 38.971H23.6438V37.5689H22.6284V38.971H21.7097V39.8895H22.6282V42.0171C22.6282 43.0809 23.0634 43.7093 24.2239 43.7093C24.6591 43.7093 25.1424 43.5644 25.4811 43.371L25.1908 42.5006C24.9007 42.6939 24.5624 42.7424 24.3206 42.7424C23.8371 42.7424 23.6438 42.4523 23.6438 41.9687V39.8895H25.2875V38.971ZM33.8941 38.8741C33.3139 38.8741 32.9272 39.1644 32.6854 39.5512V38.971H31.67V43.6126H32.6854V41.0017C32.6854 40.2282 33.0237 39.793 33.6523 39.793C33.8456 39.793 34.0875 39.8415 34.2809 39.8897L34.5709 38.9228C34.3776 38.8743 34.0875 38.8743 33.8941 38.8743V38.8741ZM20.8877 39.3578C20.4041 39.0192 19.7272 38.8743 19.0019 38.8743C17.8416 38.8743 17.0681 39.4545 17.0681 40.3731C17.0681 41.1469 17.6483 41.5819 18.6636 41.727L19.1471 41.7755C19.679 41.872 19.9691 42.0171 19.9691 42.2589C19.9691 42.5973 19.5823 42.8391 18.9052 42.8391C18.2284 42.8391 17.6965 42.5973 17.358 42.3556L16.8745 43.1292C17.4064 43.5159 18.1317 43.7093 18.8568 43.7093C20.2107 43.7093 20.9844 43.0809 20.9844 42.2105C20.9844 41.3885 20.3558 40.9533 19.3887 40.8084L18.9052 40.7599C18.47 40.7115 18.1317 40.615 18.1317 40.3249C18.1317 39.9864 18.47 39.793 19.0019 39.793C19.5823 39.793 20.1624 40.0346 20.4525 40.1798L20.8877 39.3578ZM47.8676 38.8743C47.2872 38.8743 46.9005 39.1644 46.6586 39.5512V38.971H45.6433V43.6126H46.6586V41.0017C46.6586 40.2282 46.9972 39.793 47.6255 39.793C47.8191 39.793 48.061 39.8415 48.2544 39.8897L48.5444 38.9228C48.351 38.8743 48.061 38.8743 47.8676 38.8743ZM34.9095 41.2918C34.9095 42.6939 35.8764 43.7093 37.3754 43.7093C38.0522 43.7093 38.5357 43.5644 39.0192 43.1776L38.5357 42.3556C38.1489 42.6457 37.7622 42.7906 37.327 42.7906C36.505 42.7906 35.9248 42.2105 35.9248 41.2918C35.9248 40.4216 36.505 39.8412 37.327 39.793C37.7622 39.793 38.1489 39.9379 38.5357 40.2282L39.0192 39.4062C38.5357 39.0192 38.0522 38.8743 37.3754 38.8743C35.8764 38.8743 34.9095 39.8897 34.9095 41.2918ZM44.2896 41.2918V38.971H43.2742V39.5512C42.9357 39.1162 42.4522 38.8743 41.8236 38.8743C40.5182 38.8743 39.5028 39.8897 39.5028 41.2918C39.5028 42.6939 40.5182 43.7093 41.8236 43.7093C42.5005 43.7093 42.9841 43.4677 43.2742 43.0325V43.6126H44.2896V41.2918ZM40.5664 41.2918C40.5664 40.4698 41.0983 39.793 41.9686 39.793C42.7905 39.793 43.3709 40.4216 43.3709 41.2918C43.3709 42.1138 42.7905 42.7906 41.9686 42.7906C41.0983 42.7422 40.5664 42.1138 40.5664 41.2918ZM28.4305 38.8743C27.0766 38.8743 26.1095 39.8412 26.1095 41.2918C26.1095 42.7424 27.0764 43.7093 28.4787 43.7093C29.1556 43.7093 29.8326 43.5159 30.3645 43.0809L29.8809 42.3556C29.4941 42.6457 29.0107 42.8391 28.5272 42.8391C27.8986 42.8391 27.27 42.549 27.1249 41.7268H30.5579V41.3403C30.6064 39.8412 29.7359 38.8743 28.4303 38.8743H28.4305ZM28.4305 39.7445C29.0589 39.7445 29.4943 40.1315 29.5908 40.8568H27.1733C27.27 40.2282 27.7052 39.7445 28.4305 39.7445ZM53.6213 41.2918V37.1337H52.6059V39.5512C52.2674 39.1162 51.7839 38.8743 51.1553 38.8743C49.8499 38.8743 48.8345 39.8897 48.8345 41.2918C48.8345 42.6939 49.8499 43.7093 51.1553 43.7093C51.8324 43.7093 52.3158 43.4677 52.6059 43.0325V43.6126H53.6213V41.2918ZM49.8983 41.2918C49.8983 40.4698 50.43 39.793 51.3004 39.793C52.1224 39.793 52.7026 40.4216 52.7026 41.2918C52.7026 42.1138 52.1224 42.7906 51.3004 42.7906C50.43 42.7422 49.8983 42.1138 49.8983 41.2918ZM15.9558 41.2918V38.971H14.9405V39.5512C14.6019 39.1162 14.1185 38.8743 13.4899 38.8743C12.1845 38.8743 11.1691 39.8897 11.1691 41.2918C11.1691 42.6939 12.1845 43.7093 13.4899 43.7093C14.1669 43.7093 14.6504 43.4677 14.9405 43.0325V43.6126H15.9558V41.2918ZM12.1844 41.2918C12.1844 40.4698 12.7164 39.793 13.5866 39.793C14.4086 39.793 14.9889 40.4216 14.9889 41.2918C14.9889 42.1138 14.4086 42.7906 13.5866 42.7906C12.7164 42.7422 12.1844 42.1138 12.1844 41.2918Z" fill="black" />
              <path d="M20.5491 3.72287H35.7795V31.0895H20.5491V3.72287Z" fill="#FF5F00" />
              <path d="M21.5163 17.4064C21.5163 11.8461 24.1271 6.91417 28.1401 3.72293C25.191 1.40213 21.468 0 17.4066 0C7.78439 0 0 7.78439 0 17.4064C0 27.0281 7.78439 34.8127 17.4063 34.8127C21.4678 34.8127 25.1907 33.4106 28.1401 31.0896C24.1271 27.9468 21.5163 22.9666 21.5163 17.4064Z" fill="#EB001B" />
              <path d="M56.3289 17.4064C56.3289 27.0281 48.5445 34.8127 38.9225 34.8127C34.8611 34.8127 31.1381 33.4106 28.1887 31.0896C32.2502 27.8985 34.8128 22.9666 34.8128 17.4064C34.8128 11.8461 32.2017 6.91417 28.1887 3.72293C31.1379 1.40213 34.8611 0 38.9225 0C48.5445 0 56.3291 7.83285 56.3291 17.4064H56.3289Z" fill="#F79E1B" />
            </svg>
            <svg className="size-5 sm:size-10" width="29" height="34" viewBox="0 0 29 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.1303 2.59946C22.5958 0.850436 19.822 0.100586 16.2734 0.100586H5.97435C5.62325 0.100599 5.28367 0.225859 5.01666 0.453846C4.74966 0.681833 4.57274 0.997592 4.51771 1.34435L0.22939 28.5419C0.144152 29.0782 0.559439 29.5639 1.10302 29.5639H7.46128L9.05811 19.4355L9.00855 19.7526C9.12231 19.0367 9.73462 18.5086 10.4597 18.5086H13.4811C19.4167 18.5086 24.0644 16.0978 25.422 9.12357C25.4623 8.9173 25.4972 8.71654 25.5274 8.52041C25.356 8.42966 25.356 8.42966 25.5274 8.52041C25.9317 5.94268 25.5246 4.18804 24.1303 2.59946Z" fill="#27346A" />
              <path d="M11.491 7.59182C11.6648 7.50905 11.855 7.46616 12.0475 7.46628H20.1217C21.0779 7.46628 21.9697 7.5285 22.7846 7.65966C23.0126 7.69602 23.2395 7.73943 23.4648 7.78983C23.7842 7.86031 24.1 7.94657 24.4108 8.04829C24.8115 8.1821 25.1846 8.33793 25.5275 8.52041C25.9317 5.94169 25.5246 4.18804 24.1303 2.59946C22.595 0.850436 19.822 0.100586 16.2734 0.100586H5.97347C5.24829 0.100586 4.63136 0.628532 4.51771 1.34435L0.229391 28.5409C0.144153 29.0781 0.559439 29.5631 1.10214 29.5631H7.46128L10.7742 8.55433C10.8068 8.34783 10.889 8.15233 11.0139 7.98467C11.1388 7.817 11.3025 7.68219 11.491 7.59182Z" fill="#27346A" />
              <path d="M25.4223 9.12352C24.0646 16.0967 19.4171 18.5086 13.4814 18.5086H10.4591C9.734 18.5086 9.12158 19.0367 9.00892 19.7526L7.02236 32.3461C6.94813 32.8154 7.31111 33.2407 7.78597 33.2407H13.1458C13.4528 33.2407 13.7498 33.131 13.9832 32.9316C14.2166 32.7321 14.3712 32.456 14.4192 32.1527L14.4714 31.8796L15.4816 25.4773L15.5467 25.1234C15.5947 24.8202 15.7493 24.544 15.9827 24.3446C16.2161 24.1451 16.513 24.0355 16.82 24.0354H17.6221C22.8143 24.0354 26.8798 21.926 28.0678 15.8255C28.5637 13.2761 28.3071 11.1475 26.9953 9.65245C26.5974 9.19961 26.1033 8.82563 25.5277 8.52036C25.4965 8.71748 25.4627 8.91725 25.4223 9.12352Z" fill="#2790C3" />
              <path d="M24.1066 7.95394C23.8949 7.89213 23.6813 7.8374 23.4659 7.78985C23.2404 7.74028 23.0136 7.69716 22.7857 7.66056C21.9699 7.52852 21.0787 7.46619 20.1217 7.46619H12.0485C11.8558 7.46575 11.6655 7.50902 11.492 7.59273C11.3033 7.68282 11.1393 7.81755 11.0144 7.98526C10.8895 8.15298 10.8073 8.34861 10.7751 8.55523L9.05908 19.4355L9.00952 19.7527C9.1224 19.0367 9.7347 18.5087 10.4599 18.5087H13.4822C19.4178 18.5087 24.0653 16.0978 25.423 9.12359C25.4634 8.91733 25.4973 8.71745 25.5285 8.52043C25.1847 8.33894 24.8125 8.18212 24.4118 8.0492C24.3107 8.01568 24.2089 7.98392 24.1066 7.95394Z" fill="#1F264F" />
            </svg>
            <svg className="size-5 sm:size-10" width="57" height="19" viewBox="0 0 57 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M29.776 6.2165C29.7439 8.75293 32.0365 10.1683 33.7635 11.0099C35.5378 11.8733 36.1338 12.427 36.1268 13.1992C36.1136 14.3808 34.7115 14.9024 33.3994 14.9227C31.1103 14.9581 29.7793 14.3046 28.7212 13.8104L27.8966 17.669C28.9582 18.1582 30.924 18.5848 32.9624 18.6035C37.7474 18.6035 40.8779 16.2415 40.8948 12.5794C40.9135 7.93161 34.4661 7.67436 34.5101 5.59693C34.5253 4.96701 35.1264 4.2948 36.4435 4.12388C37.0955 4.03755 38.8952 3.97147 40.9356 4.91107L41.7364 1.17778C40.6391 0.778246 39.2288 0.395666 37.473 0.395666C32.9693 0.395666 29.8016 2.78981 29.776 6.2165ZM49.4316 0.717236C48.5579 0.717236 47.8216 1.2269 47.4929 2.00902L40.6578 18.3293H45.4393L46.3908 15.6997H52.2337L52.7856 18.3293H56.9999L53.3224 0.717236H49.4316ZM50.1005 5.47491L51.4804 12.0884H47.7013L50.1005 5.47491ZM23.9788 0.717455L20.2098 18.3291H24.7662L28.5334 0.717014H23.9788V0.717455ZM17.2384 0.717014L12.4959 12.7047L10.5775 2.51208C10.3524 1.37425 9.46345 0.717236 8.47627 0.717236H0.723819L0.615234 1.22866C2.20678 1.57402 4.01505 2.13104 5.11059 2.72704C5.78104 3.09112 5.97222 3.40938 6.19247 4.27454L9.82598 18.3293H14.6409L22.0229 0.717236H17.2384" fill="url(#paint0_linear_54_477)" />
              <defs>
                <linearGradient id="paint0_linear_54_477" x1="26.5375" y1="18.9688" x2="27.0646" y2="0.269037" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#222357" />
                  <stop offset="1" stop-color="#254AA5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </footer>
    </div>
  )
}
