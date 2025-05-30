import { Instagram, Linkedin, Twitter,Mail,} from "lucide-react"
import logo from "/public/logo.png"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[var(--card-darker)] py-8 sm:py-12 mt-8 sm:mt-12 theme-transition">
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center">
              <Link href="/" className="flex items-center gap-2">
                <Image src={logo} alt="پستاک" className="w-[64px] " />
              </Link>
              </div>
              <span className="font-bold text-lg">پستاک</span>
            </div>
            <p className="text-sm text-[var(--muted-foreground)] mb-4">
              پسته‌ای که دنبالش بودید همین‌جاست؛ با تنوعی از طعم‌ها و قیمت‌ها، برای هر سلیقه و بودجه‌ای.
            </p>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-full bg-[var(--card)] flex items-center justify-center hover:bg-[var(--accent)] transition-colors">
                <Mail className="h-5 w-5" />
              </button>
              <button className="w-8 h-8 rounded-full bg-[var(--card)] flex items-center justify-center hover:bg-[var(--accent)] transition-colors">
              <Instagram className="h-5 w-5" />
              </button>
              <button formAction={""} className="w-8 h-8 rounded-full bg-[var(--card)] flex items-center justify-center hover:bg-[var(--accent)] transition-colors">
              <Twitter className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-base sm:text-lg">دسترسی سریع</h4>
            <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
              <li>
                <Link href="/" className="hover:text-[var(--accent)] transition-colors">
                  خانه
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-[var(--accent)] transition-colors">
                  فروشگاه
                </Link>
              </li>
              <li>
                <Link href="/pistachio-care" className="hover:text-[var(--accent)] transition-colors">
                  مراقبت از مزارع پسته
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-[var(--accent)] transition-colors">
                  وبلاگ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-base sm:text-lg">تماس با ما</h4>
            <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
              <li>ایمیل: hello@pistachioio.com</li>
              <li>تلفن: +۱ ۲۳۴ ۵۶۷ ۸۹۰</li>
              <li>آدرس: خیابان سبز ۱۲۳، شهر گیاهان</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-base sm:text-lg">خبرنامه</h4>
            <p className="text-sm text-[var(--muted-foreground)] mb-4">
              برای دریافت نکات و محصولات جدید در خبرنامه ما عضو شوید.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="ایمیل شما"
                className="bg-[var(--card)] text-white px-3 sm:px-4 py-2 rounded-l-lg focus:outline-none text-sm flex-1"
              />
              <button className="bg-[var(--accent)] text-[var(--background)] px-3 sm:px-4 py-2 rounded-r-lg font-medium text-sm hover:opacity-90 transition-opacity">
                عضویت
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--card)] mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-[var(--muted-foreground)]">
          <p>© ۱۴۰۴ پستاک تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  )
}
