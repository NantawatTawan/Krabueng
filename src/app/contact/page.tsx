'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { companyInfo } from '@/data/company';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Facebook,
} from 'lucide-react';

export default function ContactPage() {
  const { locale } = useLanguage();
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    area: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      {/* Hero Header */}
      <section className="relative pt-32 pb-20 bg-stone-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900" />
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative">
          <div className="badge-premium bg-white/10 text-brand-300 mb-4">
            {locale === 'th' ? 'ติดต่อเรา' : 'Contact Us'}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {locale === 'th' ? (
              <>
                พร้อมเริ่ม
                <span className="text-brand-400">โครงการ</span>ของคุณ
              </>
            ) : (
              <>
                Start Your <span className="text-brand-400">Project</span>
              </>
            )}
          </h1>
          <p className="text-lg text-stone-400 max-w-2xl">
            {locale === 'th'
              ? 'ติดต่อเราได้ทุกช่องทาง ทีมผู้เชี่ยวชาญพร้อมให้คำปรึกษาและประเมินราคาฟรี'
              : 'Reach us through any channel. Our experts are ready for free consultation and quotation.'}
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="relative -mt-10 z-10 pb-8">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: <Phone size={22} />,
                labelTh: 'โทรศัพท์',
                labelEn: 'Phone',
                valueTh: companyInfo.phone,
                valueEn: companyInfo.phone,
                href: `tel:${companyInfo.phone}`,
                color: 'bg-stone-900 text-white',
              },
              {
                icon: <MessageCircle size={22} />,
                labelTh: 'Line',
                labelEn: 'Line',
                valueTh: companyInfo.line,
                valueEn: companyInfo.line,
                href: `https://line.me/ti/p/${companyInfo.line}`,
                color: 'bg-[#06C755] text-white',
              },
              {
                icon: <Mail size={22} />,
                labelTh: 'อีเมล',
                labelEn: 'Email',
                valueTh: companyInfo.email,
                valueEn: companyInfo.email,
                href: `mailto:${companyInfo.email}`,
                color: 'bg-brand-600 text-white',
              },
              {
                icon: <Facebook size={22} />,
                labelTh: 'Facebook',
                labelEn: 'Facebook',
                valueTh: companyInfo.facebook,
                valueEn: companyInfo.facebook,
                href: 'https://facebook.com/sunnyconcrete',
                color: 'bg-[#1877F2] text-white',
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`${item.color} rounded-2xl p-6 hover-lift flex items-start gap-4 group`}
              >
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-medium opacity-80">
                    {locale === 'th' ? item.labelTh : item.labelEn}
                  </p>
                  <p className="font-bold text-lg">
                    {locale === 'th' ? item.valueTh : item.valueEn}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map Section */}
      <section className="section-padding bg-stone-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Left: Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-stone-100 p-8 md:p-10 shadow-sm">
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={32} className="text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-stone-900 mb-3">
                      {locale === 'th'
                        ? 'ส่งข้อความสำเร็จ!'
                        : 'Message Sent!'}
                    </h3>
                    <p className="text-stone-500 mb-6 max-w-md mx-auto">
                      {locale === 'th'
                        ? 'ขอบคุณที่สนใจ ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง'
                        : 'Thank you for your interest. Our team will get back to you within 24 hours.'}
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormState({
                          name: '',
                          phone: '',
                          email: '',
                          projectType: '',
                          area: '',
                          message: '',
                        });
                      }}
                      className="text-brand-600 hover:text-brand-700 font-semibold"
                    >
                      {locale === 'th' ? 'ส่งข้อความอีกครั้ง' : 'Send Another Message'}
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-stone-900 mb-2">
                        {locale === 'th'
                          ? 'ส่งข้อความถึงเรา'
                          : 'Send Us a Message'}
                      </h2>
                      <p className="text-stone-500 text-sm">
                        {locale === 'th'
                          ? 'กรอกข้อมูลด้านล่าง แล้วเราจะติดต่อกลับโดยเร็วที่สุด'
                          : 'Fill in the form below and we will get back to you as soon as possible.'}
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        {/* Name */}
                        <div>
                          <label className="block text-sm font-medium text-stone-700 mb-1.5">
                            {locale === 'th' ? 'ชื่อ-นามสกุล' : 'Full Name'}{' '}
                            <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            required
                            placeholder={
                              locale === 'th' ? 'กรอกชื่อของคุณ' : 'Enter your name'
                            }
                            className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 text-sm transition-all"
                          />
                        </div>

                        {/* Phone */}
                        <div>
                          <label className="block text-sm font-medium text-stone-700 mb-1.5">
                            {locale === 'th' ? 'เบอร์โทรศัพท์' : 'Phone'}{' '}
                            <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formState.phone}
                            onChange={handleChange}
                            required
                            placeholder={
                              locale === 'th'
                                ? '08X-XXX-XXXX'
                                : '08X-XXX-XXXX'
                            }
                            className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 text-sm transition-all"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-1.5">
                          {locale === 'th' ? 'อีเมล' : 'Email'}
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          placeholder={
                            locale === 'th'
                              ? 'example@email.com'
                              : 'example@email.com'
                          }
                          className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 text-sm transition-all"
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        {/* Project Type */}
                        <div>
                          <label className="block text-sm font-medium text-stone-700 mb-1.5">
                            {locale === 'th'
                              ? 'ประเภทโครงการ'
                              : 'Project Type'}
                          </label>
                          <select
                            name="projectType"
                            value={formState.projectType}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 text-sm transition-all"
                          >
                            <option value="">
                              {locale === 'th' ? 'เลือกประเภท' : 'Select type'}
                            </option>
                            <option value="house">
                              {locale === 'th' ? 'บ้านพักอาศัย' : 'Residential'}
                            </option>
                            <option value="commercial">
                              {locale === 'th' ? 'อาคารพาณิชย์' : 'Commercial'}
                            </option>
                            <option value="resort">
                              {locale === 'th'
                                ? 'โรงแรม/รีสอร์ต'
                                : 'Hotel/Resort'}
                            </option>
                            <option value="government">
                              {locale === 'th' ? 'หน่วยงานราชการ' : 'Government'}
                            </option>
                            <option value="other">
                              {locale === 'th' ? 'อื่นๆ' : 'Other'}
                            </option>
                          </select>
                        </div>

                        {/* Area */}
                        <div>
                          <label className="block text-sm font-medium text-stone-700 mb-1.5">
                            {locale === 'th'
                              ? 'พื้นที่โดยประมาณ (ตร.ม.)'
                              : 'Approx. Area (sq.m.)'}
                          </label>
                          <input
                            type="text"
                            name="area"
                            value={formState.area}
                            onChange={handleChange}
                            placeholder={
                              locale === 'th'
                                ? 'เช่น 100, 500'
                                : 'e.g. 100, 500'
                            }
                            className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 text-sm transition-all"
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-1.5">
                          {locale === 'th'
                            ? 'รายละเอียดเพิ่มเติม'
                            : 'Additional Details'}
                        </label>
                        <textarea
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          rows={4}
                          placeholder={
                            locale === 'th'
                              ? 'บอกเราเกี่ยวกับโครงการของคุณ เช่น ลายที่สนใจ, สถานที่, งบประมาณ...'
                              : 'Tell us about your project, e.g. pattern preference, location, budget...'
                          }
                          className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 text-sm transition-all resize-none"
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-semibold py-3.5 px-6 rounded-xl transition-colors"
                      >
                        <Send size={16} />
                        {locale === 'th' ? 'ส่งข้อความ' : 'Send Message'}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Right: Info + Map */}
            <div className="lg:col-span-2 space-y-6">
              {/* Info Card */}
              <div className="bg-white rounded-2xl border border-stone-100 p-8 shadow-sm">
                <h3 className="text-lg font-bold text-stone-900 mb-6">
                  {locale === 'th' ? 'ข้อมูลบริษัท' : 'Company Info'}
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-brand-600" />
                    </div>
                    <div>
                      <p className="text-xs text-stone-400 mb-0.5">
                        {locale === 'th' ? 'ที่อยู่' : 'Address'}
                      </p>
                      <p className="text-sm text-stone-700 leading-relaxed">
                        {locale === 'th'
                          ? companyInfo.addressTh
                          : companyInfo.addressEn}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0">
                      <Clock size={18} className="text-brand-600" />
                    </div>
                    <div>
                      <p className="text-xs text-stone-400 mb-0.5">
                        {locale === 'th' ? 'เวลาทำการ' : 'Business Hours'}
                      </p>
                      <p className="text-sm text-stone-700">
                        {locale === 'th'
                          ? 'จันทร์ - เสาร์ 08:00 - 18:00'
                          : 'Mon - Sat 08:00 - 18:00'}
                      </p>
                      <p className="text-sm text-stone-500">
                        {locale === 'th'
                          ? 'อาทิตย์ - นัดหมายล่วงหน้า'
                          : 'Sun - By appointment'}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Map */}
              <div className="bg-white rounded-2xl border border-stone-100 overflow-hidden shadow-sm">
                <div className="h-[300px] lg:h-[340px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3134.5555555555556!2d100.5283!3d13.8624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d658b8a8a8a8b%3A0x1234567890abcdef!2sNonthaburi%2C%20Nonthaburi%20Province!5e0!3m2!1sen!2sth!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs text-stone-400">
                    {locale === 'th'
                      ? 'นนทบุรี — รับงานทั่วประเทศไทย'
                      : 'Nonthaburi — Serving all of Thailand'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
