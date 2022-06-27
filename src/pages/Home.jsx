import React, { useState } from 'react';
import '../style/home.css';
import { MainCard } from '../components/UI/MainCard/MainCard';
import { SectionDivider } from '../components/UI/SectionDivider/SectionDivider';
import { Button } from '../components/UI/Button/Button';
import { NewDrop } from '../components/UI/NewDrop/NewDrop';
import { SpecialOffer } from '../components/UI/SpecialOffer/SpecialOffer';

import { Help } from '../components/UI/Icons/Help';

import card from '../img/card.png';

import { Footer } from '../components/UI/Footer/Footer';

export const Home = () => {
  const [posts, setPosts] = useState([
    {
      image:
        'https://s3-alpha-sig.figma.com/img/4527/a868/078a6e42823681c8a27537c910590f79?Expires=1656892800&Signature=OMZhInKXkbgHrc9JPc5UBbWIk9V1RgnTkQaY6Wp0baL8sbOT3IEHhtqUo5udmG9LvBVVlItNH~Yzb0fy5kJ5y0kiOgA305OFuD7hlGcZHVspbZWOhYd9Ovd0f8-0XSvqaiTsAqy9wwNhBewZhRRba5w9dWZLgueNk8qw62YgY6Wn~BxKsZHXe7mOivZLSjI5zVtZCjPMNwA~xsktl3eMBRrLUbsVJQuFGZsfxlGiPUfBldEdj1fRZLsBXuIFnOHXrWR5qWUrArbjkf5DRqi7KTUgQNqeF1vDLHcDfG3P0~cKr1aoW8QP-JXQ4HJmATczIfCRuKNSfWSIHNqoWx3gjg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      title:
        'В наличии браслеты и чокеры от @dotidrop для злюк, отвязных псов и душнил!',
      subTitle:
        'По мнению ведущих маркетологов, объемная скидка переворачивает конкурент. Концепция развития, отбрасывая подробности, синхронизирует стратегический мониторинг активности.',
      secondSubTitle: 'В наличии много вещей ручной работы в одном экземпляре.',
      isImageLeft: false,
    },
    {
      image:
        'https://s3-alpha-sig.figma.com/img/bd1b/ebce/4278a9f1e82d8846206cd984bb6db8aa?Expires=1656892800&Signature=ENxPMo~yDH7IGYuyKNxvALJoXxT3u5V3O2037NSzJOubDU7h2yCM1OcuKmVB5ay9n48IYNBtqDiWUFd4cvob3tbpnPZE60uqq6U5K3-tR4oh44NE2xnPptVC9vxQJXUpcpahwB8d845bCj7JQtm~GXmbhYKsvo-kmd4zDmR5KSDHOaOHZla0ursenY-tLOjwk~nSm7A1s60chJvpF1cDEtV~jFCvvabOfARvm1Mfrr9N-BV7juyBHEOCa6Se6N8QODz49x8DuikoRstlPEnRxlhwQsQLw~dxewOZZh0o-8i76bKRNTraikUf9-P75zESRkYGXUkAtzXHfyXmk9TMrw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      title: 'Пополнение в ряду тату–мастеров!',
      subTitle:
        'Всем привет! Я Регина, создаю татуировки по собственным эскизам и открыта к новым проектам на ваших телах!',
      secondSubTitle:
        'Вся информация есть в моих актуальных сторис, а по любым вопросам и записи жду вас в директ',
      isImageLeft: true,
    },
    {
      image:
        'https://s3-alpha-sig.figma.com/img/7238/223f/d50b2d8e5340b0766ff64a4a89a2411a?Expires=1656892800&Signature=HIhHCnYF~CDlvn4U9OZreTEs7k4TkaXNwC2TCcGUcWsdBepF80ggSj~2upR-7xPsjICnRgw~yjo-BpyUXaAqVUzVBuzTGPm5ORDQoBgQeFYAzucKCn0tF9aSQWcSJNcGmKF1nk5m5v8M3C3W2xtAvFWuHXJGiksltGKbD6lhIhtmV5AypDx~8rZ2ZnH8XIxU3u~tyMHtjYRYQl~hDVfWXM0QnorSKChRgzLIxev6v~2N~xxykVkF32nI62Tjk3bqdPUWHOBGN85Fx9GddPK5COlkybAIDkoQgNqwiq2xMGTAS~fEMgOxgYnCgSQW1jleThhFnMwAZB~2hMbQClbnbA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      title: '@_ann_loo_ и ее природные украшения',
      subTitle:
        'Анна Лу — один из резидентов которые размещаются в KMBINAT с самых первых дней открытия.',
      secondSubTitle: 'Стоимость изделий от 5 000 ₸.',
      isImageLeft: false,
    },
  ]);

  return (
    <div className='home'>
      <div className='wrapper'>
        <div className='news'>
          <div className='news__cards'>
            {posts.map((post, index) => (
              <MainCard
                image={post.image}
                title={post.title}
                subTitle={post.subTitle}
                secondSubTitle={post.secondSubTitle}
                isImageLeft={post.isImageLeft}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
      <SectionDivider
        title={'Перейти к каталогу'}
        subtitle={
          'This section uses a container element to ensure the content looks right on every device. It’s centered with the class “Centered Container.”'
        }
        button={'Вперед'}
      />
      <div className='wrapper'>
        <NewDrop />
        <MainCard
          image={card}
          title={'Свечи из натурального соевого воска с древесным фитилем'}
          subTitle={
            'Интерьерная ароматическая свеча ручной работы, выполнена из чистого пчелиного воска без примесей. 100% экологически чистый продукт. '
          }
          secondSubTitle={
            'Горение свечи способствует восстановлению и снятию стресса. Прекрасно дополнит атмосферу уютного вечера, создаст романтическую обстановку, подойдет для медитаций. Сделано с любовью к окружающему миру. Eco friendly. Состав: Пчелиный воск — 95%, ароматизатор — Роза и мёд'
          }
          isImageLeft={true}
        />
        <SpecialOffer />
        <div className='faq'>
          <div className='faq__card'>
            <div className='faq__logo'>
              <Help />
            </div>
            <div className='faq__text'>
              <div className='faq__title'>Вопросы-ответы</div>
              <div className='faq__subtitle'>
                Все о проекте, доставке и прочем
              </div>
            </div>
          </div>
          <div className='faq__card faq__active'>
            <div className='faq__logo'>
              <Help />
            </div>
            <div className='faq__text'>
              <div className='faq__title'>Как сделать заказ?</div>
              <div className='faq__subtitle'>
                Подробная инструкция для клиентов
              </div>
            </div>
          </div>
          <div className='faq__card'>
            <div className='faq__logo'>
              <Help />
            </div>
            <div className='faq__text'>
              <div className='faq__title'>Как сделать возврат?</div>
              <div className='faq__subtitle'>
                Подробная инструкция для клиентов
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='deviders'>
        <SectionDivider
          title={'Сегментация рынка как целевая аудитория'}
          subtitle={'Подпишитесь на рассылку, чтобы быть в курсе новинок! '}
          button={'Подробнее'}
          bg={'rgba(0, 0, 0, 0.8)'}
          white={true}
          style={{ marginTop: '0', marginBottom: '0', height: '378px' }}
        />
        <SectionDivider
          title={'Рассылка'}
          subtitle={'Подпишитесь на рассылку, чтобы быть в курсе новинок! '}
          button={<input />}
          bg={'rgba(255, 255, 255, 0.8)'}
          style={{ marginTop: '0', marginBottom: '0', height: '378px' }}
          white={false}
        />
      </div>
    </div>
  );
};
