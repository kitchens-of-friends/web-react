import { Calendar, Divider } from "antd";
import moment from "moment";
import React, { useState } from "react";
import ReactLoading from "react-loading";
import KitchenCarousel from "../components/carousel";
import NavBar from "../components/navbar";

const TEST_DATA = {
  imgs: [
    "https://kitchen-of-friends.s3.amazonaws.com/121666532714_.pic.jpg",
    "https://kitchen-of-friends.s3.amazonaws.com/141666532715_.pic.jpg",
    "https://kitchen-of-friends.s3.amazonaws.com/151666532715_.pic.jpg",
    "https://kitchen-of-friends.s3.amazonaws.com/131666532714_.pic_hd.jpg",
  ],
  title: "野生大骚风的料理坊",
};

const checkDateInvalid = (iterDate, loading) => {
  let flag = loading;
  if (moment(moment.now()).isAfter(iterDate)) {
    flag = true;
  }
  if (moment(moment(moment.now()).add(1, "M")).isBefore(iterDate)) {
    flag = true;
  }
  // Friday's Night & Saturday's Night Only
  if (iterDate.day() !== 5 && iterDate.day() !== 6) {
    flag = true;
  }
  return flag;
};

const BookingPage = () => {
  const [hasPicked, setHasPicked] = useState(false);
  const [selectDate, setSelectDate] = useState(moment());
  const [loading, setLoading] = useState(false);

  return (
    <div className="sm:p-8">
      <NavBar />
      {/* Image Section */}
      <div className="p-8 mt-8">
        <h1 className="text-2xl">{TEST_DATA.title}</h1>
        <div className="my-2">
          <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
            良心厨房
          </span>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
            高分评价
          </span>
        </div>
        <KitchenCarousel imgs={TEST_DATA.imgs} />
      </div>
      {/* Booking Detail Section */}
      <div className="flex flex-col px-8 lg:flex-row">
        {/* Left Comps */}
        <div className="lg:w-3/5 lg:px-4">
          <h1 className="text-2xl my-6">房主描述</h1>
          <p>
            野生大骚风极其擅长川菜，特开此厨房以照顾每位朋友！
            <br />
            <br />
            欢迎大家通过本平台订阅饭菜，来骚风家里吃！
            本骚风接受骚风友谊币进行菜品支付，请提前联系它以获得测试骚风友谊币，币的有效期为无限长。
            <br />
            <br />
            v1.0 菜单的预览链接:
            https://www.docdroid.net/e2Sd1iH/chef-lions-menu-ver10-pdf
            <br />
            <br />
            Long live our friendship, Cheers!
          </p>
          <h1 className="text-2xl my-6">房主提供</h1>
          <div className="flex flex-col">
            <div className="flex flex-row items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                />
              </svg>
              <div>家庭美食</div>
            </div>
            <div className="flex flex-row items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>

              <div>预约菜单</div>
            </div>
            <div className="flex flex-row items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                />
              </svg>

              <div>饭后聊天</div>
            </div>
          </div>
          <h1 className="text-2xl my-6">往期评价</h1>
          <div className="w-full h-40">
            <div className="">暂无评价，搓爪爪等待第一位顾客光临中🌟</div>
          </div>
        </div>
        {/* Right Comps */}
        <div className="my-8 lg:mt-0 lg:w-2/5 lg:p-8">
          <div className="border-shadow shadow-md shadow-grey-500 rounded-lg pb-4">
            <h1 className="text-lg pt-4 px-4">预约饭局</h1>
            <Divider className="h-1" />
            <h1 className="text-md px-4">类型：晚餐</h1>
            <h1 className="text-md px-4">价格：1 骚风友谊币 / 1 骚风晚餐券 </h1>
            <h1 className="text-md px-4">地点：普陀-宝山，上海</h1>
            <h1 className="text-md px-4">饭点：6:00 PM</h1>
            <Divider className="h-1" />
            <h1 className="text-md px-4">选择日期</h1>
            <div className="p-4">
              <Calendar
                fullscreen={false}
                disabledDate={(date) => checkDateInvalid(date, loading)}
                onChange={(newDate) => {
                  setHasPicked(true);
                  setSelectDate(newDate);
                }}
              />
            </div>
            {hasPicked && !checkDateInvalid(selectDate, loading) ? (
              <h1 className="text-md px-4 mb-8">
                所选日期： {selectDate.month() + 1} 月 {selectDate.date()} 日{" "}
              </h1>
            ) : (
              <></>
            )}
            <div className="mx-4 flex justify-center">
              <button
                className={
                  (loading
                    ? `bg-yellow-200 cursor-wait`
                    : hasPicked && !checkDateInvalid(selectDate, loading)
                    ? `bg-yellow-400 hover:bg-yellow-300`
                    : `bg-neutral-300 cursor-not-allowed`) +
                  " text-white text-md rounded-md border-2 w-4/5 h-10 font-extrabold"
                }
                disabled={checkDateInvalid(selectDate, loading)}
                onClick={() => {
                  setLoading(true);
                  console.log("click submit");
                }}
              >
                <div className="flex items-center justify-center">
                  {loading ? (
                    <ReactLoading
                      color="white"
                      width={30}
                      height={30}
                      type="bars"
                      className="mr-4"
                    />
                  ) : (
                    <></>
                  )}
                  {hasPicked && !checkDateInvalid(selectDate, loading) ? (
                    <div>现在预定！</div>
                  ) : (
                    <div>🔒 请选择有效时间</div>
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
