export default function Wrap({ className = '', as: Tag = 'div', children, ...props }) {
  return (
    <Tag className={`mx-auto w-full max-w-[1200px] px-6 md:px-10 ${className}`} {...props}>
      {children}
    </Tag>
  )
}
