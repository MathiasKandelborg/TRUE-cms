/** @format */

import FileIcon from 'part:@sanity/base/file-icon'
import FolderIcon from 'part:@sanity/base/folder-icon'
import { Link } from 'part:@sanity/base/router'
import * as React from 'react'
import styles from './StructureMenuWidget.css'

type TItem = {
  id: string
  icon: string
  title: string
  schemaType?: {
    icon: string
  }
}

interface IStructureMenuWidget {
  structure: {
    items: [TItem]
  }
}

function getIconComponent(item: TItem) {
  if (item.icon) return item.icon
  if (!item.schemaType) return FileIcon
  return item.schemaType.icon || FolderIcon
}

const StructureMenuWidget: React.FC<IStructureMenuWidget> = (props) => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <h3 className={styles.title}>Edit your content</h3>
      </div>

      <div className={styles.content}>
        {props.structure.items.map((item) => {
          const Icon = getIconComponent(item)
          return (
            <div key={item.id}>
              <Link className={styles.link} href={`/desk/${item.id}`}>
                <div className={styles.iconWrapper}>
                  <Icon />
                </div>
                <div>{item.title}</div>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default StructureMenuWidget
