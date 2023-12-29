import React from 'react';
import line from "/assets/vector-21.svg"
import location from '/assets/Location.svg';

const OrderRequest = () => {
    return (
        <div className="flex w-[360px] h-[243px] mt-5 mb-8 bg-gray-200 rounded-xl text-left text-xs text-black font-inter relative p-10 m-2 ">
            <section className=" rounded-mini bg-ghostwhite w-full h-full" />
            <button className="cursor-pointer p-0 bg-[transparent] absolute top-[178px] left-[188px] w-[157px] h-[50px]">
                <div className="rounded-xl  border-blue-500  bg-white text-blue-600 box-border w-[157px] h-[50px] border-[1px] border-solid border-royalblue" />
                <div className="text-mini h-12 rounded-xl tracking-[0.01em] font-inter text-royalblue text-center inline-block w-[88px]">
                    <p className='-top-[32px] relative text-blue-600 text-md'>Ignore</p>
                </div>
            </button>
            <button className="cursor-pointer p-0 bg-[transparent] absolute top-[130px] left-[15px] w-[157px] h-[50px]">
                <div className="  flex rounded-mini bg-royalblue box-border w-[157px] h-[50px] border-[1px] border-solid border-royalblue" />
                <div className="h-12 w-auto  bg-blue-500  text-center rounded-xl">
                    <p className='top-[18px] relative text-white'>Accept</p>
                </div>
            </button>
            <img
                className="absolute top-[57px] left-[15px] max-h-full w-[330px] object-cover"
                alt=""
                src={line}
            />
            <div className="absolute top-[117px] left-[15px] w-[330px] h-[46px] text-sm">
                <p className="m-0 absolute top-[15px] left-[0px] tracking-[0.01em] opacity-[0.8]">
                    Budget
                </p>
                <b className="absolute top-[15px] left-[296px] tracking-[0.01em] text-right">
                    ₹356
                </b>
                <img
                    className="absolute top-[0px] left-[0px] max-h-full w-[330px] object-cover"
                    alt=""
                    src={line}
                />
                <img
                    className="absolute top-[46px] left-[0px] max-h-full w-[330px] object-cover"
                    alt=""
                    src={line}
                />
            </div>
            <p className="m-0 absolute top-[72px] left-[45px] tracking-[0.01em] leading-[15px] inline-block w-[266px] opacity-[0.5]">
                B-35 Naginawadi society, Sumul dairy road, katargam, Surat, Gujarat. 395004
            </p>
            <img
                className="absolute top-[71px] left-[15px] w-4 h-[21px] object-cover"
                alt=""
                src={location}
            />
            <span className="absolute top-[33px] left-[15px] tracking-[0.01em]">
                24th Sep 2023
            </span>
            <span className="absolute top-[18px] left-[15px] tracking-[0.01em] font-semibold opacity-[0.4]">
                On
            </span>
            <span className="absolute top-[18px] left-[292px] tracking-[0.01em] font-semibold text-right opacity-[0.4]">
                Between
            </span>
            <a className="[text-decoration:none] absolute top-[33px] left-[199px] tracking-[0.01em] font-medium text-royalblue text-right inline-block w-[146px]">
                10:00 AM - 12:00 PM
            </a>
        </div>
    );
};

export default OrderRequest;
