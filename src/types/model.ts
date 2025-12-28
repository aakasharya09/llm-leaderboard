export interface Model {
  model_id: string;
  name: string;
  organization: string;
  organization_id: string;
  organization_country: string;
  params: number | null;
  context: number;
  canonical_model_id: string | null;
  release_date: string;
  announcement_date: string;
  multimodal: boolean;
  license: string;
  knowledge_cutoff: string | null;
  input_price: string;
  output_price: string;
  throughput: string;
  latency: string | null;
  aime_2025_score: number | null;
  hle_score: number | null;
  gpqa_score: number | null;
  swe_bench_verified_score: number | null;
  mmmu_score: number | null;
}
