import react from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Header from "@/Components/header";
import PrimaryButton from "@/Components/PrimaryButton";

const Index = ({ practices }) => {
    return (
        <>
            <Header />
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-20 py-10 mx-auto">
                    <div className="flex py-16 mx-auto justify-between">
                        <h1 className="text-4xl font-bold">練習募集一覧</h1>
                        <PrimaryButton
                            className="bg-gray-400 "
                            children="新規作成"
                        />
                    </div>
                    {practices.map((practice) => (
                        <div class="my-8 divide-y-2 divide-gray-100">
                            <div class="px-8 py-8 flex flex-wrap md:flex-nowrap border">
                                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                    <span class="font-semibold title-font text-gray-700">
                                        {practice.start_at}
                                    </span>
                                    <span class="mt-1 text-gray-500 text-sm">
                                        12 Jun 2019
                                    </span>
                                </div>
                                <div class="md:flex-grow">
                                    <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                                        主催者：{practice.user.name}
                                    </h2>
                                    <p class="leading-relaxed">
                                        場所：{practice.location.name}
                                    </p>
                                    <p class="leading-relaxed">
                                        参加人数：{practice.players.length}/
                                        {practice.category.capacity}
                                    </p>
                                </div>
                                <a class="text-indigo-500 inline-flex items-center mt-4">
                                    詳細
                                    <svg
                                        class="w-4 h-4 ml-2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Index;
