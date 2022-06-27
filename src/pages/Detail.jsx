import React from 'react';
import '../style/detail.css';
import ImageGallery from 'react-image-gallery';
import { Help } from '../components/UI/Icons/Help';
import { Recent } from '../components/UI/Recent/Recent';

const images = [
  {
    original:
      'https://s3-alpha-sig.figma.com/img/7238/223f/d50b2d8e5340b0766ff64a4a89a2411a?Expires=1656892800&Signature=HIhHCnYF~CDlvn4U9OZreTEs7k4TkaXNwC2TCcGUcWsdBepF80ggSj~2upR-7xPsjICnRgw~yjo-BpyUXaAqVUzVBuzTGPm5ORDQoBgQeFYAzucKCn0tF9aSQWcSJNcGmKF1nk5m5v8M3C3W2xtAvFWuHXJGiksltGKbD6lhIhtmV5AypDx~8rZ2ZnH8XIxU3u~tyMHtjYRYQl~hDVfWXM0QnorSKChRgzLIxev6v~2N~xxykVkF32nI62Tjk3bqdPUWHOBGN85Fx9GddPK5COlkybAIDkoQgNqwiq2xMGTAS~fEMgOxgYnCgSQW1jleThhFnMwAZB~2hMbQClbnbA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/7238/223f/d50b2d8e5340b0766ff64a4a89a2411a?Expires=1656892800&Signature=HIhHCnYF~CDlvn4U9OZreTEs7k4TkaXNwC2TCcGUcWsdBepF80ggSj~2upR-7xPsjICnRgw~yjo-BpyUXaAqVUzVBuzTGPm5ORDQoBgQeFYAzucKCn0tF9aSQWcSJNcGmKF1nk5m5v8M3C3W2xtAvFWuHXJGiksltGKbD6lhIhtmV5AypDx~8rZ2ZnH8XIxU3u~tyMHtjYRYQl~hDVfWXM0QnorSKChRgzLIxev6v~2N~xxykVkF32nI62Tjk3bqdPUWHOBGN85Fx9GddPK5COlkybAIDkoQgNqwiq2xMGTAS~fEMgOxgYnCgSQW1jleThhFnMwAZB~2hMbQClbnbA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    original:
      'https://s3-alpha-sig.figma.com/img/7238/223f/d50b2d8e5340b0766ff64a4a89a2411a?Expires=1656892800&Signature=HIhHCnYF~CDlvn4U9OZreTEs7k4TkaXNwC2TCcGUcWsdBepF80ggSj~2upR-7xPsjICnRgw~yjo-BpyUXaAqVUzVBuzTGPm5ORDQoBgQeFYAzucKCn0tF9aSQWcSJNcGmKF1nk5m5v8M3C3W2xtAvFWuHXJGiksltGKbD6lhIhtmV5AypDx~8rZ2ZnH8XIxU3u~tyMHtjYRYQl~hDVfWXM0QnorSKChRgzLIxev6v~2N~xxykVkF32nI62Tjk3bqdPUWHOBGN85Fx9GddPK5COlkybAIDkoQgNqwiq2xMGTAS~fEMgOxgYnCgSQW1jleThhFnMwAZB~2hMbQClbnbA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/7238/223f/d50b2d8e5340b0766ff64a4a89a2411a?Expires=1656892800&Signature=HIhHCnYF~CDlvn4U9OZreTEs7k4TkaXNwC2TCcGUcWsdBepF80ggSj~2upR-7xPsjICnRgw~yjo-BpyUXaAqVUzVBuzTGPm5ORDQoBgQeFYAzucKCn0tF9aSQWcSJNcGmKF1nk5m5v8M3C3W2xtAvFWuHXJGiksltGKbD6lhIhtmV5AypDx~8rZ2ZnH8XIxU3u~tyMHtjYRYQl~hDVfWXM0QnorSKChRgzLIxev6v~2N~xxykVkF32nI62Tjk3bqdPUWHOBGN85Fx9GddPK5COlkybAIDkoQgNqwiq2xMGTAS~fEMgOxgYnCgSQW1jleThhFnMwAZB~2hMbQClbnbA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    original:
      'https://s3-alpha-sig.figma.com/img/7238/223f/d50b2d8e5340b0766ff64a4a89a2411a?Expires=1656892800&Signature=HIhHCnYF~CDlvn4U9OZreTEs7k4TkaXNwC2TCcGUcWsdBepF80ggSj~2upR-7xPsjICnRgw~yjo-BpyUXaAqVUzVBuzTGPm5ORDQoBgQeFYAzucKCn0tF9aSQWcSJNcGmKF1nk5m5v8M3C3W2xtAvFWuHXJGiksltGKbD6lhIhtmV5AypDx~8rZ2ZnH8XIxU3u~tyMHtjYRYQl~hDVfWXM0QnorSKChRgzLIxev6v~2N~xxykVkF32nI62Tjk3bqdPUWHOBGN85Fx9GddPK5COlkybAIDkoQgNqwiq2xMGTAS~fEMgOxgYnCgSQW1jleThhFnMwAZB~2hMbQClbnbA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/7238/223f/d50b2d8e5340b0766ff64a4a89a2411a?Expires=1656892800&Signature=HIhHCnYF~CDlvn4U9OZreTEs7k4TkaXNwC2TCcGUcWsdBepF80ggSj~2upR-7xPsjICnRgw~yjo-BpyUXaAqVUzVBuzTGPm5ORDQoBgQeFYAzucKCn0tF9aSQWcSJNcGmKF1nk5m5v8M3C3W2xtAvFWuHXJGiksltGKbD6lhIhtmV5AypDx~8rZ2ZnH8XIxU3u~tyMHtjYRYQl~hDVfWXM0QnorSKChRgzLIxev6v~2N~xxykVkF32nI62Tjk3bqdPUWHOBGN85Fx9GddPK5COlkybAIDkoQgNqwiq2xMGTAS~fEMgOxgYnCgSQW1jleThhFnMwAZB~2hMbQClbnbA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
];
export const Detail = () => {
  return (
    <div className='detail'>
      <div className='wrapper'>
        <div className='detail'>
          <div className='detail__left'>
            <div className='images'>
              <ImageGallery
                items={images}
                thumbnailPosition={'right'}
                showFullscreenButton={false}
                showPlayButton={false}
                showThumbnails={true}
                showNav={false}
                disableThumbnailScroll={true}
                showBullets={true}
                useTranslate3D={false}
              />
            </div>
            <div className='description left'>
              <div className='sign'>
                <Help />
              </div>
              <div className='decripition__title'>Описание</div>
              <div className='decripition__subtitle'>
                Анна Лу — один из резидентов которые размещаются в KMBINAT с
                самых первых дней открытия.
              </div>
              <div className='decripition__subtitle'>
                Анна Лу — один из резидентов которые размещаются в KMBINAT с
                самых первых дней открытия.
              </div>
            </div>
          </div>
          <div className='detail__right'>
            <div className='container'>
              <div className='title'>Серьги из натурального камня</div>
              <div className='price'>12 000 ₸</div>
              <div className='size__choose'>
                <div className='size__subtitle'>Таблица размеров</div>
                <div className='select__size'>
                  <select className='select'>
                    <option value='Выберите размер'>Выберите размер</option>
                    <option value='1'>1</option>
                    <option value='1'>1</option>
                  </select>
                  <div className='button__group'>
                    <div className='btn add__to__favor'>В избранное</div>
                    <div className='btn add__to__cart'>Добавить в корзину</div>
                  </div>
                </div>

                <div className='description left'>
                  <div className='sign'>
                    <Help />
                  </div>
                  <div className='decripition__title'>Описание</div>
                  <div className='decripition__subtitle'>
                    Анна Лу — один из резидентов которые размещаются в KMBINAT с
                    самых первых дней открытия.
                  </div>
                  <div className='decripition__subtitle'>
                    Анна Лу — один из резидентов которые размещаются в KMBINAT с
                    самых первых дней открытия.
                  </div>
                  <div className='decripition__title'>
                    Примерная дата доставки:
                  </div>
                  <div className='decripition__subtitle'>23 июня — 1 июля</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='recent'>
          <Recent images={images} />
        </div>
      </div>
    </div>
  );
};
