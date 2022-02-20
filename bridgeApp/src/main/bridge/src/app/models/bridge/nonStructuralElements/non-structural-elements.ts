import { Barrier } from './barrier';
import { Council } from './council';
import { HandrailRailing } from './handrail-railing';
import { ProtectionWorks } from './protection-works';
import { RailingPosts } from './railing-posts';
import { SlabAccess } from './slab-access';

export interface NonStructuralElements {
  nonStructuralElementsId?: number;
  image?: null;
  barrierBarrierId?: Barrier;
  handrailRailingHandrailRailingId?: HandrailRailing;
  railingPostsRailingPostsId?: RailingPosts;
  protectionWorksList?: ProtectionWorks[];
  councilList?: Council[];
  slabAccessList?: SlabAccess[];
}
