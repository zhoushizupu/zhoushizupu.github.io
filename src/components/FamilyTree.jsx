import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import './FamilyTree.css'

function FamilyTree({ familyData, onPersonSelect }) {
  const svgRef = useRef()
  const containerRef = useRef()
  const [zoom, setZoom] = useState(null)

  useEffect(() => {
    if (!familyData || !svgRef.current) return

    const width = containerRef.current?.clientWidth || window.innerWidth
    const height = window.innerHeight - 80

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const g = svg.append('g')

    const newZoom = d3.zoom()
      .scaleExtent([0.1, 4])
      .on('zoom', (event) => {
        g.attr('transform', event.transform)
      })

    svg.call(newZoom)
    setZoom(newZoom)

    const rootId = familyData.family.rootId
    const persons = familyData.family.persons
    
    const hierarchy = buildHierarchy(rootId, persons)
    
    if (!hierarchy) {
      console.error('无法构建家族树层级')
      return
    }
    
    const treeLayout = d3.tree()
      .size([width - 100, height - 100])
      .nodeSize([180, 200])

    const root = d3.hierarchy(hierarchy)
    treeLayout(root)

    const linkGenerator = d3.linkVertical()
      .x(d => d.x)
      .y(d => d.y)

    g.selectAll('.link')
      .data(root.links())
      .join('path')
      .attr('class', 'link')
      .attr('d', linkGenerator)
      .attr('fill', 'none')
      .attr('stroke', '#ccc')
      .attr('stroke-width', '2px')

    const nodes = g.selectAll('.node')
      .data(root.descendants())
      .join('g')
      .attr('class', 'node')
      .attr('transform', d => `translate(${d.x},${d.y})`)

    nodes.append('circle')
      .attr('r', 35)
      .attr('fill', d => d.data.data.gender === 'M' ? '#4CAF50' : '#FF69B4')
      .attr('stroke', '#fff')
      .attr('stroke-width', '3px')
      .style('cursor', 'pointer')
      .on('click', (event, d) => {
        onPersonSelect(d.data.data)
      })

    nodes.append('image')
      .attr('href', d => d.data.data.media?.avatar || '/media/default-avatar.png')
      .attr('x', -25)
      .attr('y', -25)
      .attr('width', 50)
      .attr('height', 50)
      .attr('clip-path', 'circle(25px at 25px 25px)')
      .style('cursor', 'pointer')
      .on('click', (event, d) => {
        onPersonSelect(d.data.data)
      })

    nodes.append('text')
      .attr('dy', 50)
      .attr('text-anchor', 'middle')
      .text(d => d.data.data.name)
      .style('font-size', '14px')
      .style('fill', '#333')
      .style('font-weight', 'bold')

    const initialTransform = d3.zoomIdentity.translate(width / 2 - root.x, 100).scale(0.8)
    svg.call(newZoom.transform, initialTransform)

  }, [familyData, onPersonSelect])

  const buildHierarchy = (personId, persons, visited = new Set()) => {
    if (visited.has(personId)) {
      return null
    }
    visited.add(personId)

    const person = persons[personId]
    if (!person) return null

    const node = {
      data: person,
      children: []
    }

    if (person.family?.children) {
      node.children = person.family.children
        .map(childId => buildHierarchy(childId, persons, new Set(visited)))
        .filter(child => child !== null)
    }

    return node
  }

  return (
    <div className="family-tree-container" ref={containerRef}>
      <svg ref={svgRef} width="100%" height="100%"></svg>
    </div>
  )
}

export default FamilyTree
