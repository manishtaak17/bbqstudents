"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';



type Stock = {
  id: number;
  exchange: string;
  value: string;
  change: string;
};

const StockExchangeSection = () => {
  const [stocks, setStocks] = useState<Stock[]>([]);

  // Mock API call to fetch stock data
  useEffect(() => {
    const fetchStockData = async () => {
      // Simulated API response
      const mockData = [
        {
          id: 1,
          exchange: 'BSE',
          value: '3,500',
          change: '−6.75 (1.76%)',
        },
        {
          id: 2,
          exchange: 'NSE',
          value: '3,520',
          change: '−5.50 (1.50%)',
        },
      ];
      setStocks(mockData);
    };

    fetchStockData();
  }, []);

  return (
      <div className="max-w-[1262px] mx-auto px-5">
        <div className="flex justify-between gap-0 md:gap-0 flex-wrap md:flex-nowrap">
          <div className="w-full max-w-[100%] md:max-w-[290px] flex items-center lg:items-end border-b md:border-b-0 border-darkgray pb-5 md:pb-0">
            <h5 className="text-darkpink font-firaSans-condensed font-semibold italic text-2xl md:text-3xl leading-[33px] md:leading-[40px] tracking-[-1%] uppercase flex items-start md:items-center gap-4 md:gap-2 max-w-[301px]">
              <p className="block size-3 bg-redbrown mt-2 md:mt-0"></p>
              <span>
                Stock exchange <br /> information
              </span>
            </h5>
          </div>
          <div className="w-full max-w-[100%] md:max-w-[747px] flex justify-between flex-wrap md:flex-nowrap gap-5 mt-[66px] md:mt-0 px-4 md:px-0">
            {stocks.map((stock) => (
              <div
                key={stock.id}
                className="w-full max-w-[100%] md:max-w-[292px]"
              >
                <div className="border-b-0 md:border-b border-darkgray pb-0 md:pb-5 mb-5">
                  <p className="text-darkgray font-firaSans-condensed font-normal md:font-semibold not-italic md:italic text-2xl md:text-3xl leading-[40px] tracking-[-1%] uppercase flex justify-between md:justify-start items-center gap-5">
                    {stock.exchange}{' '}
                    <Image
                      src="/icons/areo-45.svg"
                      alt="icon"
                      width={20}
                      height={20}
                    />
                  </p>
                </div>
                <div className="border-b md:border-b-0 border-darkgray pb-4 md:pb-0">
                  <h5 className="flex justify-between items-center gap-5 text-bgbrown font-firaSans-condensed italic md:not-italic font-semibold text-[30px] md:text-[46px] leading-[40px] md:leading-[56px]">
                    {stock.value}{' '}
                    <Image
                      src="/icons/stock.svg"
                      className="mb-[-19px] md:mb-0"
                      alt="icon"
                      width={62}
                      height={35}
                    />
                  </h5>
                  <p className="text-bgbrown font-firaSans-condensed font-normal md:font-medium text-[22px] md:text-2xl leading-[27px] md:leading-[56px]">
                    {stock.change} today
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default StockExchangeSection;