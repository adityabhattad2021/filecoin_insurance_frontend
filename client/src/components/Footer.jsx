export default function Footer() {
    return(
        <div className="bg-[#fff] shadow-2xl min-h-[200px] py-10 px-6 lg:py-14 lg:px-20 flex justify-between items-center flex-wrap">
            <div className="max-w-[450px] mr-8">
                <a href="#"><img className="h-8 object-contain cursor-pointer md:h-12" src="/logo.png" alt="cryptosurance-logo"/></a>
                <p className="text-[#202020] text-sm my-6">We at cryptosurance provide insurance to storage provider to protect them from crypto crash</p>
                <p className="text-[#3BBDB6] text-xl font-bold">© CRYPTOSURANCE All Rights Reserved.</p>
            </div>
            <img className="flex-1 h-[300px] object-contain hidden lg:block" src="/footer.png" alt="banner-image"  />      
        </div>
    )
}