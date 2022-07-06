import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "utils/classNames";

const sidebarLinks = [
  {
    icon: (
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 6.5C3 3.87479 3.02811 3 6.5 3C9.97189 3 10 3.87479 10 6.5C10 9.12521 10.0111 10 6.5 10C2.98893 10 3 9.12521 3 6.5Z"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 6.5C14 3.87479 14.0281 3 17.5 3C20.9719 3 21 3.87479 21 6.5C21 9.12521 21.0111 10 17.5 10C13.9889 10 14 9.12521 14 6.5Z"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 17.5C3 14.8748 3.02811 14 6.5 14C9.97189 14 10 14.8748 10 17.5C10 20.1252 10.0111 21 6.5 21C2.98893 21 3 20.1252 3 17.5Z"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 17.5C14 14.8748 14.0281 14 17.5 14C20.9719 14 21 14.8748 21 17.5C21 20.1252 21.0111 21 17.5 21C13.9889 21 14 20.1252 14 17.5Z"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Dashboard",
    url: "/",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <svg clip-path="url(#clip0_2194_6118)">
          <path
            d="M17 0C16.7348 0 16.4804 0.105357 16.2929 0.292893C16.1054 0.48043 16 0.734784 16 1C16 3.949 13.417 5 11 5H4C2.93913 5 1.92172 5.42143 1.17157 6.17157C0.421427 6.92172 0 7.93913 0 9L0 11C0.00218416 11.5987 0.139462 12.1893 0.401603 12.7276C0.663743 13.2659 1.04399 13.7381 1.514 14.109L5.086 22.081C5.34004 22.6521 5.75417 23.1373 6.27827 23.4779C6.80237 23.8185 7.41396 23.9998 8.039 24C8.53631 23.9997 9.02565 23.875 9.46247 23.6373C9.89929 23.3996 10.2697 23.0564 10.54 22.639C10.8104 22.2215 10.972 21.7431 11.0103 21.2473C11.0485 20.7515 10.9621 20.2539 10.759 19.8L8.559 15H11C13.417 15 16 16.051 16 19C16 19.2652 16.1054 19.5196 16.2929 19.7071C16.4804 19.8946 16.7348 20 17 20C17.2652 20 17.5196 19.8946 17.7071 19.7071C17.8946 19.5196 18 19.2652 18 19V1C18 0.734784 17.8946 0.48043 17.7071 0.292893C17.5196 0.105357 17.2652 0 17 0V0ZM8.937 20.619C9.00324 20.7686 9.03109 20.9323 9.01804 21.0954C9.005 21.2585 8.95145 21.4157 8.86227 21.5529C8.77309 21.69 8.65109 21.8027 8.50733 21.8808C8.36357 21.9589 8.20259 21.9999 8.039 22C7.8004 21.9998 7.56697 21.9304 7.36709 21.8001C7.1672 21.6698 7.00945 21.4842 6.913 21.266L4.105 15H6.359L8.937 20.619ZM16 14.6C14.5713 13.4992 12.8024 12.9331 11 13H4C3.46957 13 2.96086 12.7893 2.58579 12.4142C2.21071 12.0391 2 11.5304 2 11V9C2 8.46957 2.21071 7.96086 2.58579 7.58579C2.96086 7.21071 3.46957 7 4 7H11C12.8018 7.0683 14.5706 6.50403 16 5.405V14.6ZM23.9 15.452C23.8413 15.5696 23.7601 15.6744 23.6609 15.7606C23.5617 15.8467 23.4465 15.9125 23.3218 15.9541C23.1972 15.9957 23.0656 16.0123 22.9345 16.0031C22.8035 15.9938 22.6755 15.9588 22.558 15.9L20.558 14.9C20.3206 14.7814 20.1401 14.5735 20.0561 14.3218C19.972 14.0701 19.9915 13.7954 20.11 13.558C20.2286 13.3206 20.4365 13.1401 20.6882 13.0561C20.9399 12.972 21.2146 12.9914 21.452 13.11L23.452 14.11C23.6882 14.2285 23.8678 14.4356 23.9518 14.6861C24.0357 14.9366 24.0171 15.2102 23.9 15.447V15.452ZM20.11 6.452C20.0512 6.33448 20.0162 6.20653 20.0069 6.07546C19.9977 5.9444 20.0143 5.81279 20.0559 5.68816C20.0975 5.56353 20.1633 5.44832 20.2494 5.34912C20.3356 5.24991 20.4404 5.16866 20.558 5.11L22.558 4.11C22.7954 3.99145 23.0701 3.97205 23.3218 4.05606C23.5735 4.14008 23.7815 4.32063 23.9 4.558C24.0186 4.79537 24.038 5.07011 23.9539 5.32178C23.8699 5.57346 23.6894 5.78145 23.452 5.9L21.452 6.9C21.3345 6.95876 21.2065 6.99378 21.0755 7.00306C20.9444 7.01234 20.8128 6.99571 20.6882 6.9541C20.5635 6.9125 20.4483 6.84674 20.3491 6.76058C20.2499 6.67443 20.1687 6.56957 20.11 6.452ZM20 10C20 9.73478 20.1054 9.48043 20.2929 9.29289C20.4804 9.10536 20.7348 9 21 9H23C23.2652 9 23.5196 9.10536 23.7071 9.29289C23.8946 9.48043 24 9.73478 24 10C24 10.2652 23.8946 10.5196 23.7071 10.7071C23.5196 10.8946 23.2652 11 23 11H21C20.7348 11 20.4804 10.8946 20.2929 10.7071C20.1054 10.5196 20 10.2652 20 10Z"
            fill="currentColor"
          />
        </svg>
        <defs>
          <clipPath id="clip0_2194_6118">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    title: "Campaign",
    url: "/campaign",
  },
  {
    icon: (
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.1111 8.14286V5.57143C18.1111 4.88944 17.8536 4.23539 17.3951 3.75315C16.9367 3.27092 16.315 3 15.6667 3H3.44444C2.79614 3 2.17438 3.27092 1.71596 3.75315C1.25754 4.23539 1 4.88944 1 5.57143V13.2857C1 13.9677 1.25754 14.6218 1.71596 15.104C2.17438 15.5862 2.79614 15.8571 3.44444 15.8571H5.88889M8.33333 21H20.5556C21.2039 21 21.8256 20.7291 22.284 20.2468C22.7425 19.7646 23 19.1106 23 18.4286V10.7143C23 10.0323 22.7425 9.37825 22.284 8.89601C21.8256 8.41377 21.2039 8.14286 20.5556 8.14286H8.33333C7.68503 8.14286 7.06327 8.41377 6.60485 8.89601C6.14643 9.37825 5.88889 10.0323 5.88889 10.7143V18.4286C5.88889 19.1106 6.14643 19.7646 6.60485 20.2468C7.06327 20.7291 7.68503 21 8.33333 21ZM16.8889 14.5714C16.8889 15.2534 16.6313 15.9075 16.1729 16.3897C15.7145 16.8719 15.0928 17.1429 14.4444 17.1429C13.7961 17.1429 13.1744 16.8719 12.716 16.3897C12.2575 15.9075 12 15.2534 12 14.5714C12 13.8894 12.2575 13.2354 12.716 12.7532C13.1744 12.2709 13.7961 12 14.4444 12C15.0928 12 15.7145 12.2709 16.1729 12.7532C16.6313 13.2354 16.8889 13.8894 16.8889 14.5714Z"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Payment",
    url: "/payment",
  },
  {
    icon: (
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.46098 11H2.1C1.49249 11 1 10.5026 1 9.88889V2.11111C1 1.49746 1.49249 1 2.1 1H21.9C22.5075 1 23 1.49746 23 2.11111V9.88889C23 10.5026 22.5075 11 21.9 11H19.8207"
          stroke="currentColor"
          strokeWidth={2}
        />
        <path
          d="M19.4286 6H4.57143C4.25583 6 4 6.24551 4 6.54839V22.4516C4 22.7545 4.25583 23 4.57143 23H19.4286C19.7442 23 20 22.7545 20 22.4516V6.54839C20 6.24551 19.7442 6 19.4286 6Z"
          stroke="currentColor"
          strokeWidth={2}
        />
        <path
          d="M15 16.3794C15 16.8153 14.8949 17.2259 14.6848 17.6114C14.4825 17.9886 14.179 18.3029 13.7744 18.5543C13.3775 18.7973 12.9066 18.9398 12.3619 18.9817V20H11.6148V18.9691C10.8366 18.8937 10.2101 18.6423 9.73537 18.2149C9.2607 17.779 9.0156 17.1924 9 16.4549H10.751C10.7977 17.0583 11.0856 17.4229 11.6148 17.5486V15.1474C11.0545 14.9966 10.6031 14.8457 10.2607 14.6949C9.9183 14.544 9.62258 14.301 9.37358 13.9657C9.1245 13.6304 9 13.1737 9 12.5954C9 11.8663 9.24128 11.2713 9.72375 10.8103C10.214 10.3493 10.8443 10.0853 11.6148 10.0183V9H12.3619V10.0183C13.109 10.0853 13.7043 10.3284 14.1479 10.7474C14.5992 11.1665 14.8522 11.7447 14.9066 12.4823H13.144C13.1206 12.2393 13.0389 12.0297 12.8988 11.8537C12.7665 11.6693 12.5876 11.5394 12.3619 11.464V13.84C12.9455 13.9993 13.4047 14.1543 13.7393 14.3051C14.0817 14.4476 14.3774 14.6864 14.6264 15.0217C14.8755 15.3486 15 15.8011 15 16.3794ZM10.7043 12.5074C10.7043 12.784 10.7821 13.0103 10.9378 13.1863C11.0934 13.3539 11.3191 13.4922 11.6148 13.6011V11.4263C11.3346 11.4682 11.1128 11.5813 10.9494 11.7657C10.786 11.9501 10.7043 12.1973 10.7043 12.5074ZM12.3619 17.5737C12.6576 17.515 12.8872 17.3851 13.0506 17.184C13.2218 16.9829 13.3074 16.7398 13.3074 16.4549C13.3074 16.1783 13.2256 15.9562 13.0622 15.7886C12.8988 15.621 12.6654 15.4827 12.3619 15.3737V17.5737Z"
          fill="currentColor"
        />
      </svg>
    ),
    title: "Withdraw",
    url: "/withdraw",
  },
  {
    icon: (
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx={12}
          cy={9}
          r={3}
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
        />
        <circle cx={12} cy={12} r={11} stroke="currentColor" strokeWidth={2} />
        <path
          d="M19 20C18.5871 18.8525 17.6773 17.8384 16.4117 17.1152C15.146 16.392 13.5953 16 12 16C10.4047 16 8.85398 16.392 7.58835 17.1152C6.32271 17.8384 5.41289 18.8525 5 20"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Profile",
    url: "/profile",
  },
  {
    icon: (
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.67965 22.2267L5.01948 22.9778L5.67965 22.2267ZM21.2533 20.1437L22.0045 20.8039L21.2533 20.1437ZM16.7701 2.52318L16.6417 3.51491L16.7701 2.52318ZM5.67965 1.77328L5.01948 1.02216L5.67965 1.77328ZM9.38503 2.57581L16.6417 3.51491L16.8984 1.53145L9.64171 0.592353L9.38503 2.57581ZM21 8.47356V15.5264H23V8.47356H21ZM16.6417 20.4851L9.38502 21.4242L9.64171 23.4076L16.8984 22.4685L16.6417 20.4851ZM6 6.64513V5.551H4V6.64513H6ZM6 18.449V17.5726H4V18.449H6ZM9.38502 21.4242C8.30383 21.5641 7.5977 21.6531 7.07374 21.6474C6.57822 21.642 6.42467 21.5502 6.33983 21.4756L5.01948 22.9778C5.61428 23.5006 6.32624 23.6394 7.05199 23.6473C7.74929 23.6549 8.62019 23.5398 9.64171 23.4076L9.38502 21.4242ZM4 18.449C4 19.479 3.99767 20.3575 4.09468 21.0481C4.19565 21.7668 4.42467 22.455 5.01948 22.9778L6.33983 21.4756C6.25498 21.401 6.14417 21.2605 6.07523 20.7698C6.00233 20.2509 6 19.5392 6 18.449H4ZM21 15.5264C21 16.8086 20.9981 17.6759 20.9147 18.3324C20.8348 18.9608 20.6934 19.2661 20.5022 19.4836L22.0045 20.8039C22.56 20.1719 22.7919 19.4245 22.8987 18.5846C23.0019 17.7728 23 16.7561 23 15.5264H21ZM16.8984 22.4685C18.1179 22.3107 19.1264 22.1821 19.9182 21.9756C20.7375 21.7619 21.4489 21.436 22.0045 20.8039L20.5022 19.4836C20.3111 19.701 20.0264 19.8804 19.4135 20.0403C18.7731 20.2074 17.9133 20.3205 16.6417 20.4851L16.8984 22.4685ZM16.6417 3.51491C17.9133 3.67947 18.7731 3.79264 19.4135 3.95967C20.0264 4.11956 20.3111 4.29896 20.5022 4.51643L22.0045 3.19609C21.4489 2.56405 20.7375 2.2381 19.9182 2.02442C19.1264 1.81788 18.1179 1.68927 16.8984 1.53145L16.6417 3.51491ZM23 8.47356C23 7.2439 23.0019 6.22723 22.8987 5.41542C22.7919 4.57554 22.56 3.82812 22.0045 3.19609L20.5022 4.51643C20.6934 4.73391 20.8348 5.03922 20.9147 5.66765C20.9981 6.32415 21 7.19136 21 8.47356H23ZM9.64171 0.592353C8.62019 0.460156 7.74929 0.345098 7.05199 0.352683C6.32624 0.360577 5.61428 0.499373 5.01948 1.02216L6.33983 2.52439C6.42467 2.44981 6.57822 2.35795 7.07374 2.35256C7.5977 2.34687 8.30383 2.43589 9.38503 2.57581L9.64171 0.592353ZM6 5.551C6 4.4608 6.00233 3.74908 6.07523 3.23018C6.14417 2.73945 6.25498 2.59896 6.33983 2.52439L5.01948 1.02216C4.42467 1.54495 4.19565 2.23321 4.09468 2.95194C3.99767 3.6425 4 4.52097 4 5.551H6Z"
          fill="currentColor"
        />
        <path
          d="M15 12L15.8107 11.4145L16.2335 12L15.8107 12.5855L15 12ZM1 13C0.447715 13 0 12.5523 0 12C0 11.4477 0.447715 11 1 11V13ZM11.4773 5.41451L15.8107 11.4145L14.1893 12.5855L9.85599 6.58549L11.4773 5.41451ZM15.8107 12.5855L11.4773 18.5855L9.85599 17.4145L14.1893 11.4145L15.8107 12.5855ZM15 13H1V11H15V13Z"
          fill="currentColor"
        />
      </svg>
    ),
    title: "Log out",
    url: "#",
    onClick: () => {},
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 18.5455C10.264 18.5455 8.59918 17.8558 7.37167 16.6283C6.14415 15.4008 5.45455 13.736 5.45455 12C5.45455 10.264 6.14415 8.59918 7.37167 7.37167C8.59918 6.14415 10.264 5.45455 12 5.45455C13.736 5.45455 15.4008 6.14415 16.6283 7.37167C17.8558 8.59918 18.5455 10.264 18.5455 12C18.5455 13.736 17.8558 15.4008 16.6283 16.6283C15.4008 17.8558 13.736 18.5455 12 18.5455ZM12 16.3636C13.1573 16.3636 14.2672 15.9039 15.0856 15.0856C15.9039 14.2672 16.3636 13.1573 16.3636 12C16.3636 10.8427 15.9039 9.73278 15.0856 8.91444C14.2672 8.0961 13.1573 7.63636 12 7.63636C10.8427 7.63636 9.73278 8.0961 8.91444 8.91444C8.0961 9.73278 7.63636 10.8427 7.63636 12C7.63636 13.1573 8.0961 14.2672 8.91444 15.0856C9.73278 15.9039 10.8427 16.3636 12 16.3636ZM10.9091 1.09091C10.9091 0.488417 11.3975 0 12 0C12.6025 0 13.0909 0.488417 13.0909 1.09091V2.18182C13.0909 2.78431 12.6025 3.27273 12 3.27273C11.3975 3.27273 10.9091 2.78431 10.9091 2.18182V1.09091ZM10.9091 21.8182C10.9091 21.2157 11.3975 20.7273 12 20.7273C12.6025 20.7273 13.0909 21.2157 13.0909 21.8182V22.9091C13.0909 23.5116 12.6025 24 12 24C11.3975 24 10.9091 23.5116 10.9091 22.9091V21.8182ZM3.51491 5.05745C3.08895 4.63149 3.08895 3.94087 3.51491 3.51491C3.94087 3.08895 4.63149 3.08895 5.05745 3.51491L5.82873 4.28618C6.25469 4.71214 6.25469 5.40277 5.82873 5.82873C5.40277 6.25469 4.71214 6.25469 4.28618 5.82873L3.51491 5.05745ZM18.1713 19.7138C17.7453 19.2879 17.7453 18.5972 18.1713 18.1713C18.5972 17.7453 19.2879 17.7453 19.7138 18.1713L20.4851 18.9425C20.9111 19.3685 20.9111 20.0591 20.4851 20.4851C20.0591 20.9111 19.3685 20.9111 18.9425 20.4851L18.1713 19.7138ZM18.9421 3.51464C19.3682 3.0883 20.0594 3.08834 20.4855 3.51473C20.9113 3.94083 20.9111 4.63141 20.4852 5.05736L19.7139 5.82864C19.2879 6.25465 18.5972 6.25465 18.1712 5.82864C17.7452 5.4027 17.7452 4.71213 18.171 4.28609L18.9421 3.51464ZM4.28618 18.1713C4.71214 17.7453 5.40277 17.7453 5.82873 18.1713C6.25469 18.5972 6.25469 19.2879 5.82873 19.7138L5.05746 20.4851C4.63149 20.9111 3.94087 20.9111 3.51491 20.4851C3.08895 20.0591 3.08895 19.3685 3.51491 18.9425L4.28618 18.1713ZM22.9091 10.9091C23.5116 10.9091 24 11.3975 24 12C24 12.6025 23.5116 13.0909 22.9091 13.0909H21.8182C21.2157 13.0909 20.7273 12.6025 20.7273 12C20.7273 11.3975 21.2157 10.9091 21.8182 10.9091H22.9091ZM2.18182 10.9091C2.78431 10.9091 3.27273 11.3975 3.27273 12C3.27273 12.6025 2.78431 13.0909 2.18182 13.0909H1.09091C0.488417 13.0909 0 12.6025 0 12C0 11.3975 0.488417 10.9091 1.09091 10.9091H2.18182Z"
          fill="currentColor"
        />
      </svg>
    ),
    title: "Light/Dark",
    url: "#",
    onClick: () => {},
  },
];

const DashboardSidebar = () => {
  return (
    <div className="w-full md:w-[76px] rounded-3xl bg-white shadow-[10px_10px_20px_rgba(218,_213,_213,_0.55)] px-4 py-10 flex flex-col">
      {sidebarLinks.map((link) => (
        <NavLink
          to={link.url}
          key={link.title}
          className={classNames(
            "flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-lg md:mb-8 text-icon-color last:mt-auto last:bg-white last:shadow-sdprimary",
            ({ isActive }) =>
              isActive ? "bg-primary text-primary bg-opacity-20" : "hidden"
          )}
        >
          <span>{link.icon}</span>
          <span className="md:hidden"> {link.title}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default DashboardSidebar;
