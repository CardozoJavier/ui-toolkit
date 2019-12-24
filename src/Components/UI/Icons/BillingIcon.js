import React from 'react';
import { BillingIconContainer } from './styles';

export default ({ props, disabled }) => (
  <BillingIconContainer {...props} disabled={disabled} >
    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <line x1="-4.37114e-08" y1="30.5" x2="209" y2="30.5" stroke="red"/>
      <path d="M35.594 10.578H31.702L30.82 13H29.28L32.766 3.76H34.558L38.044 13H36.462L35.594 10.578ZM35.146 9.36L34.082 6.392L33.662 5.062H33.62L33.228 6.364L32.136 9.36H35.146ZM42.4158 5.86C43.9465 5.86 44.9592 6.51333 45.4538 7.82L44.0538 8.38C43.8112 7.49333 43.2652 7.05 42.4158 7.05C41.7905 7.05 41.3052 7.26467 40.9598 7.694C40.6145 8.12333 40.4418 8.73 40.4418 9.514C40.4418 10.298 40.6145 10.9 40.9598 11.32C41.3052 11.74 41.7905 11.95 42.4158 11.95C42.8918 11.95 43.2745 11.8333 43.5638 11.6C43.8532 11.3667 44.0445 11.0307 44.1378 10.592L45.5098 11.054C45.3045 11.7073 44.9405 12.2207 44.4178 12.594C43.8952 12.958 43.2372 13.14 42.4438 13.14C41.3425 13.14 40.4792 12.818 39.8538 12.174C39.2378 11.53 38.9298 10.6387 38.9298 9.5C38.9298 8.36133 39.2378 7.47 39.8538 6.826C40.4698 6.182 41.3238 5.86 42.4158 5.86ZM51.8015 12.538C51.5775 12.7247 51.3022 12.874 50.9755 12.986C50.6582 13.0887 50.3128 13.14 49.9395 13.14C49.2955 13.14 48.7775 12.9813 48.3855 12.664C48.0028 12.3373 47.8068 11.8333 47.7975 11.152V7.176H46.4675V6H47.7975V4.362L49.2955 3.942V6H51.7455V7.176H49.2955V10.9C49.2955 11.236 49.3842 11.488 49.5615 11.656C49.7482 11.8147 50.0002 11.894 50.3175 11.894C50.7468 11.894 51.1248 11.7447 51.4515 11.446L51.8015 12.538ZM53.9551 4.824C53.6378 4.824 53.3904 4.74467 53.2131 4.586C53.0358 4.418 52.9471 4.18467 52.9471 3.886C52.9471 3.58733 53.0358 3.35867 53.2131 3.2C53.3904 3.04133 53.6378 2.962 53.9551 2.962C54.2724 2.962 54.5151 3.04133 54.6831 3.2C54.8604 3.35867 54.9491 3.58733 54.9491 3.886C54.9491 4.18467 54.8604 4.418 54.6831 4.586C54.5151 4.74467 54.2724 4.824 53.9551 4.824ZM54.6971 13H53.1991V6H54.6971V13ZM63.2149 6L60.4289 13H58.7909L55.9909 6H57.6429L59.6169 11.782L61.6469 6H63.2149ZM70.7091 9.29C70.7091 9.56067 70.6904 9.81733 70.6531 10.06H65.5291C65.6131 10.676 65.8324 11.1473 66.1871 11.474C66.5417 11.7913 66.9991 11.95 67.5591 11.95C68.0164 11.95 68.3944 11.8707 68.6931 11.712C69.0011 11.544 69.2111 11.306 69.3231 10.998L70.5691 11.516C70.0464 12.5987 69.0431 13.14 67.5591 13.14C66.4577 13.14 65.5944 12.818 64.9691 12.174C64.3531 11.53 64.0451 10.6387 64.0451 9.5C64.0451 8.352 64.3437 7.46067 64.9411 6.826C65.5384 6.182 66.3784 5.86 67.4611 5.86C68.4877 5.86 69.2857 6.17267 69.8551 6.798C70.4244 7.42333 70.7091 8.254 70.7091 9.29ZM67.4611 7.05C66.9197 7.05 66.4811 7.20867 66.1451 7.526C65.8184 7.84333 65.6131 8.30533 65.5291 8.912H69.3091C69.2344 8.324 69.0337 7.86667 68.7071 7.54C68.3897 7.21333 67.9744 7.05 67.4611 7.05ZM83.8808 5.048H80.7168V13H79.2188V5.048H76.0548V3.76H83.8808V5.048ZM90.1592 12.02C90.3646 12.02 90.5372 12.0013 90.6772 11.964L90.5792 12.972C90.3272 13.084 90.0379 13.14 89.7112 13.14C89.3099 13.14 88.9879 13.0607 88.7452 12.902C88.5119 12.7433 88.3579 12.4773 88.2832 12.104C88.0686 12.4307 87.7512 12.6873 87.3312 12.874C86.9112 13.0513 86.4399 13.14 85.9172 13.14C85.2359 13.14 84.6852 12.9813 84.2652 12.664C83.8452 12.3467 83.6352 11.894 83.6352 11.306C83.6352 10.7553 83.8639 10.2933 84.3212 9.92C84.7786 9.53733 85.4599 9.26667 86.3652 9.108L88.1432 8.8V8.422C88.1432 7.99267 88.0172 7.65667 87.7652 7.414C87.5132 7.162 87.1632 7.036 86.7152 7.036C85.7912 7.036 85.1892 7.456 84.9092 8.296L83.7472 7.68C83.9152 7.12 84.2559 6.67667 84.7692 6.35C85.2919 6.02333 85.9312 5.86 86.6872 5.86C87.5926 5.86 88.3112 6.07 88.8432 6.49C89.3752 6.91 89.6412 7.526 89.6412 8.338V11.502C89.6412 11.6793 89.6786 11.81 89.7532 11.894C89.8372 11.978 89.9726 12.02 90.1592 12.02ZM86.2392 12.006C86.7432 12.006 87.1866 11.8847 87.5692 11.642C87.9519 11.3993 88.1432 11.0773 88.1432 10.676V9.836L86.6172 10.144C86.1319 10.2373 85.7726 10.368 85.5392 10.536C85.3059 10.704 85.1892 10.928 85.1892 11.208C85.1892 11.4693 85.2779 11.67 85.4552 11.81C85.6419 11.9407 85.9032 12.006 86.2392 12.006ZM95.8616 5.86C96.8229 5.86 97.5789 6.18667 98.1296 6.84C98.6803 7.484 98.9556 8.37533 98.9556 9.514C98.9556 10.6527 98.6803 11.544 98.1296 12.188C97.5789 12.8227 96.8229 13.14 95.8616 13.14C95.3109 13.14 94.8256 13.0093 94.4056 12.748C93.9949 12.4867 93.6869 12.1367 93.4816 11.698L93.4116 13H92.0956V2.85H93.5936V7.12C93.8083 6.728 94.1116 6.42 94.5036 6.196C94.9049 5.972 95.3576 5.86 95.8616 5.86ZM95.5256 11.936C96.1323 11.936 96.6036 11.7213 96.9396 11.292C97.2849 10.8627 97.4576 10.2653 97.4576 9.5C97.4576 8.73467 97.2849 8.142 96.9396 7.722C96.6036 7.29267 96.1323 7.078 95.5256 7.078C94.9563 7.078 94.4989 7.26933 94.1536 7.652C93.8176 8.03467 93.6309 8.562 93.5936 9.234V9.766C93.6309 10.4473 93.8176 10.9793 94.1536 11.362C94.4989 11.7447 94.9563 11.936 95.5256 11.936ZM106.909 10.956C106.909 11.3013 106.96 11.544 107.063 11.684C107.166 11.8147 107.357 11.88 107.637 11.88C107.814 11.88 107.964 11.8707 108.085 11.852C108.216 11.824 108.374 11.7727 108.561 11.698L108.393 12.902C108.076 13.0607 107.688 13.14 107.231 13.14C106.606 13.14 106.144 12.9813 105.845 12.664C105.556 12.3467 105.411 11.8473 105.411 11.166V2.85H106.909V10.956ZM112.894 5.86C113.986 5.86 114.84 6.182 115.456 6.826C116.072 7.47 116.38 8.36133 116.38 9.5C116.38 10.6387 116.072 11.53 115.456 12.174C114.84 12.818 113.986 13.14 112.894 13.14C111.802 13.14 110.948 12.818 110.332 12.174C109.716 11.53 109.408 10.6387 109.408 9.5C109.408 8.36133 109.716 7.47 110.332 6.826C110.948 6.182 111.802 5.86 112.894 5.86ZM112.894 7.036C112.26 7.036 111.77 7.25067 111.424 7.68C111.088 8.1 110.92 8.70667 110.92 9.5C110.92 10.2933 111.088 10.9047 111.424 11.334C111.77 11.754 112.26 11.964 112.894 11.964C113.529 11.964 114.019 11.7493 114.364 11.32C114.71 10.8907 114.882 10.284 114.882 9.5C114.882 8.716 114.71 8.10933 114.364 7.68C114.019 7.25067 113.529 7.036 112.894 7.036ZM122.071 5.86C122.845 5.86 123.475 6.084 123.961 6.532C124.455 6.98 124.703 7.624 124.703 8.464V13H123.205V8.94C123.205 7.708 122.705 7.092 121.707 7.092C121.184 7.092 120.736 7.274 120.363 7.638C119.989 7.99267 119.803 8.54333 119.803 9.29V13H118.305V6H119.635L119.705 7.162C119.938 6.72333 120.26 6.39667 120.671 6.182C121.081 5.96733 121.548 5.86 122.071 5.86ZM131.047 11.908C131.756 11.908 132.307 12.0667 132.699 12.384C133.091 12.7013 133.287 13.14 133.287 13.7C133.287 14.176 133.128 14.5867 132.811 14.932C132.503 15.2773 132.073 15.5433 131.523 15.73C130.981 15.9167 130.37 16.01 129.689 16.01C128.578 16.01 127.743 15.8467 127.183 15.52C126.632 15.1933 126.357 14.7593 126.357 14.218C126.357 13.9007 126.464 13.6207 126.679 13.378C126.903 13.1447 127.211 12.9767 127.603 12.874C127.304 12.734 127.066 12.5567 126.889 12.342C126.711 12.118 126.623 11.852 126.623 11.544C126.623 10.8627 126.987 10.396 127.715 10.144C127.36 9.93867 127.089 9.67267 126.903 9.346C126.725 9.01933 126.637 8.646 126.637 8.226C126.637 7.75933 126.763 7.34867 127.015 6.994C127.267 6.63 127.621 6.35 128.079 6.154C128.545 5.958 129.077 5.86 129.675 5.86C130.188 5.86 130.659 5.93467 131.089 6.084C131.219 5.57067 131.453 5.18333 131.789 4.922C132.134 4.65133 132.587 4.52067 133.147 4.53L133.399 5.692C132.951 5.68267 132.587 5.73867 132.307 5.86C132.036 5.98133 131.849 6.16333 131.747 6.406C132.055 6.62067 132.293 6.882 132.461 7.19C132.629 7.498 132.713 7.84333 132.713 8.226C132.713 8.94467 132.433 9.51867 131.873 9.948C131.322 10.3773 130.589 10.592 129.675 10.592C129.245 10.592 128.858 10.55 128.513 10.466C128.279 10.522 128.107 10.6153 127.995 10.746C127.892 10.8673 127.841 11.0307 127.841 11.236C127.841 11.4507 127.915 11.6187 128.065 11.74C128.223 11.852 128.438 11.908 128.709 11.908H131.047ZM129.675 6.91C129.245 6.91 128.886 7.036 128.597 7.288C128.307 7.53067 128.163 7.84333 128.163 8.226C128.163 8.618 128.307 8.94 128.597 9.192C128.886 9.43467 129.245 9.556 129.675 9.556C130.113 9.556 130.473 9.43467 130.753 9.192C131.042 8.94 131.187 8.618 131.187 8.226C131.187 7.834 131.042 7.51667 130.753 7.274C130.473 7.03133 130.113 6.91 129.675 6.91ZM129.829 14.89C130.51 14.89 131.042 14.792 131.425 14.596C131.807 14.4 131.999 14.1573 131.999 13.868C131.999 13.6347 131.905 13.4573 131.719 13.336C131.532 13.2147 131.219 13.154 130.781 13.154H128.891C128.471 13.154 128.153 13.2193 127.939 13.35C127.733 13.4807 127.631 13.6627 127.631 13.896C127.631 14.2133 127.813 14.456 128.177 14.624C128.55 14.8013 129.101 14.89 129.829 14.89ZM143.043 5.86C143.818 5.86 144.448 6.084 144.933 6.532C145.428 6.98 145.675 7.624 145.675 8.464V13H144.177V8.94C144.177 7.708 143.678 7.092 142.679 7.092C142.157 7.092 141.709 7.274 141.335 7.638C140.962 7.99267 140.775 8.54333 140.775 9.29V13H139.277V6H140.607L140.677 7.162C140.911 6.72333 141.233 6.39667 141.643 6.182C142.054 5.96733 142.521 5.86 143.043 5.86ZM153.993 12.02C154.199 12.02 154.371 12.0013 154.511 11.964L154.413 12.972C154.161 13.084 153.872 13.14 153.545 13.14C153.144 13.14 152.822 13.0607 152.579 12.902C152.346 12.7433 152.192 12.4773 152.117 12.104C151.903 12.4307 151.585 12.6873 151.165 12.874C150.745 13.0513 150.274 13.14 149.751 13.14C149.07 13.14 148.519 12.9813 148.099 12.664C147.679 12.3467 147.469 11.894 147.469 11.306C147.469 10.7553 147.698 10.2933 148.155 9.92C148.613 9.53733 149.294 9.26667 150.199 9.108L151.977 8.8V8.422C151.977 7.99267 151.851 7.65667 151.599 7.414C151.347 7.162 150.997 7.036 150.549 7.036C149.625 7.036 149.023 7.456 148.743 8.296L147.581 7.68C147.749 7.12 148.09 6.67667 148.603 6.35C149.126 6.02333 149.765 5.86 150.521 5.86C151.427 5.86 152.145 6.07 152.677 6.49C153.209 6.91 153.475 7.526 153.475 8.338V11.502C153.475 11.6793 153.513 11.81 153.587 11.894C153.671 11.978 153.807 12.02 153.993 12.02ZM150.073 12.006C150.577 12.006 151.021 11.8847 151.403 11.642C151.786 11.3993 151.977 11.0773 151.977 10.676V9.836L150.451 10.144C149.966 10.2373 149.607 10.368 149.373 10.536C149.14 10.704 149.023 10.928 149.023 11.208C149.023 11.4693 149.112 11.67 149.289 11.81C149.476 11.9407 149.737 12.006 150.073 12.006ZM164.372 5.86C164.838 5.86 165.268 5.958 165.66 6.154C166.052 6.34067 166.364 6.63 166.598 7.022C166.831 7.414 166.948 7.89467 166.948 8.464V13H165.45V8.702C165.45 8.15133 165.319 7.74533 165.058 7.484C164.796 7.22267 164.446 7.092 164.008 7.092C163.494 7.092 163.06 7.27867 162.706 7.652C162.36 8.02533 162.188 8.53867 162.188 9.192V13H160.69V8.702C160.69 8.15133 160.559 7.74533 160.298 7.484C160.036 7.22267 159.686 7.092 159.248 7.092C158.949 7.092 158.66 7.17133 158.38 7.33C158.1 7.47933 157.871 7.71733 157.694 8.044C157.516 8.37067 157.428 8.78133 157.428 9.276V13H155.93V6H157.26L157.33 7.162C157.563 6.73267 157.88 6.41067 158.282 6.196C158.683 5.972 159.122 5.86 159.598 5.86C160.12 5.86 160.592 5.98133 161.012 6.224C161.441 6.45733 161.758 6.80267 161.964 7.26C162.178 6.80267 162.505 6.45733 162.944 6.224C163.392 5.98133 163.868 5.86 164.372 5.86ZM175.477 9.29C175.477 9.56067 175.458 9.81733 175.421 10.06H170.297C170.381 10.676 170.6 11.1473 170.955 11.474C171.309 11.7913 171.767 11.95 172.327 11.95C172.784 11.95 173.162 11.8707 173.461 11.712C173.769 11.544 173.979 11.306 174.091 10.998L175.337 11.516C174.814 12.5987 173.811 13.14 172.327 13.14C171.225 13.14 170.362 12.818 169.737 12.174C169.121 11.53 168.813 10.6387 168.813 9.5C168.813 8.352 169.111 7.46067 169.709 6.826C170.306 6.182 171.146 5.86 172.229 5.86C173.255 5.86 174.053 6.17267 174.623 6.798C175.192 7.42333 175.477 8.254 175.477 9.29ZM172.229 7.05C171.687 7.05 171.249 7.20867 170.913 7.526C170.586 7.84333 170.381 8.30533 170.297 8.912H174.077C174.002 8.324 173.801 7.86667 173.475 7.54C173.157 7.21333 172.742 7.05 172.229 7.05Z" />
      <path d="M15.55 0H0.45C0.2 0 0 0.2 0 0.45V14.73C0.03 14.79 0.05 14.84 0.08 14.9L1.37 16C1.37 16 3.25 14.57 3.58 14.57C3.91 14.57 5.79 16 5.79 16C5.79 16 7.67 14.57 8 14.57C8.33 14.57 10.21 16 10.21 16C10.21 16 12.09 14.57 12.42 14.57C12.75 14.57 14.63 16 14.63 16L15.92 14.91C15.95 14.85 15.97 14.8 16 14.74V0.45C16 0.2 15.8 0 15.55 0ZM9 11.27V12H8V11.27C6.89 11.16 5.92 10.75 5.17 10.05L6 9.04C6.72 9.69 7.55 10.1 8.58 10.1C9.55 10.1 10.05 9.62 10.05 9.07C10.05 8.42 9.49 8.21 8.23 7.91C6.61 7.53 5.48 7.06 5.48 5.6C5.48 4.32 6.51 3.38 8 3.26V2H9V3.31C9.98 3.46 10.67 3.82 11.27 4.33L10.5 5.37C9.81 4.78 9.02 4.45 8.25 4.45C7.46 4.45 6.92 4.93 6.92 5.47C6.92 6.11 7.5 6.33 8.75 6.62C10.38 6.98 11.48 7.51 11.48 8.93C11.48 10.16 10.63 11.08 9 11.27Z" />
    </svg>
  </BillingIconContainer>
);