import React from 'react';
import { ShoppingCart } from '../components/UI/Icons/ShoppingCart';
import { ShareCard } from '../components/UI/Icons/ShareCard';

import ImageGallery from 'react-image-gallery';
import { ArrowRight } from '../components/UI/Icons/ArrowRight';

import { Link } from 'react-router-dom';

import '../style/items.css';
import { Recent } from '../components/UI/Recent/Recent';
import { ItemCard } from '../components/UI/ItemCard/ItemCard';

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
export const Items = () => {
  return (
    <div>
      <div className='wrapper'>
        <div className='options'>
          <div className='filters'>
            <div>
              <ArrowRight />
            </div>
            <div className='options__text'>Фильтры</div>
          </div>
          <div className='sortings'>
            <div className='options__text'>Сортировка</div>
            <div>
              <ArrowRight />
            </div>
          </div>
        </div>
        <div className='items__list'>
          {[0, 1, 2, 3, 4, 1, 1, 1, 1, 11, 1, 11, 1, 1, 1, 1, 1, 1, 11, 1].map(
            (card) => (
              <ItemCard images={images} />
            )
          )}
        </div>
        <div className='pagination'>
          <div className='arrowLeft'>
            <ArrowRight
              style={{
                transform: 'rotate(180deg)',
              }}
            />
          </div>
          <div className='nums'>
            <div className='page'>1</div>
            <div className='page'>2</div>
            <div className='page'>...</div>
            <div className='page'>8</div>
          </div>
          <div className='arrowRight'>
            <ArrowRight
              style={{
                transform: 'rotate(360deg)',
              }}
            />
          </div>
        </div>
        <Recent images={images} />
      </div>
    </div>
  );
};
