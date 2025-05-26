import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2024-25',
    title: 'VTU',
    subtitle: 'Master of Computer Applications',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2019-22',
    title: 'Mangalore',
    subtitle: 'Bachelor of Computer Applications',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '2022-23',
    title: 'Sun Ites',
    subtitle: 'Web/Epub Developer',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -10),
    year: '2025',
    title: 'Evolvetech',
    subtitle: 'Software Developer Intern',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
    year: '2025',
    title: 'LMG8.Tech',
    subtitle: 'Front-End Developer Intern',
    position: 'right',
  }
]